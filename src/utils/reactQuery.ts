import api from '@/services/api/api';
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query';
import { QueryFunctionContext } from 'react-query/types/core/types';
import { AxiosError, AxiosResponse } from 'axios';

export interface GetInfinitePagesInterface<T> {
  nextId?: number;
  previousId?: number;
  data: T;
  count: number;
}

type QueryKeyT = [string, object | undefined];

export const fetcher = <T>({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;
  return api
    .get<T>(url, { params: { ...params, pageParam } })
    .then((res) => res.data);
};

export const useGetApi = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKeyT>,
) => {
  const context = useQuery<T, Error, T, QueryKeyT>(
    [url!, params],
    ({ queryKey, meta }) => fetcher({ queryKey, meta }),
    {
      enabled: !!url,
      ...config,
    },
  );

  return context;
};

const useSendApi = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined,
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data) => {
      //Cancel any ongoing requests.
      await queryClient.cancelQueries([url!, params]);
      //Save the current data into a variable.
      const previousData = queryClient.getQueryData([url!, params]);

      //If defined, use an updater function to mutate our state by some specific logic,
      // if not, just override the state with the new data
      queryClient.setQueryData<T>([url!, params], (oldData) => {
        return updater ? updater(oldData!, data as S) : (data as T);
      });

      return previousData;
    },
    onError: (err, _, context) => {
      //Roll back the previous data.
      queryClient.setQueryData([url!, params], context);
      console.log(err);
    },
    onSettled: () => {
      //Invalidate the query to keep the fresh state.
      queryClient.invalidateQueries([url!, params]);
    },
  });
};

export const useDelete = <T>(
  url: string,
  params?: object,
  updater?: (oldData: T, id: string | number) => T,
) => {
  return useSendApi<T, string | number>(
    (id) => api.delete(`${url}/${id}`),
    url,
    params,
    updater,
  );
};

export const useUpdate = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useSendApi<T, S>(
    (data) => api.patch<S>(url, data),
    url,
    params,
    updater,
  );
};
