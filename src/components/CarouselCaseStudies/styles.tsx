import styled from 'styled-components';
import bg from '@/assets/icons/idea.svg';

const CarouselContainer = styled.div`
  background-color: ${({ theme }) => theme.pallete.blue.blue.darker};
  padding: 56px 0 56px 100px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;

  .slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 56px;
    position: relative;
    width: 100%;
    max-width: ${({ theme }) => theme.pallete.size.desktop};
    margin: auto;
    overflow: hidden;
    &-left {
      max-width: 500px;
      width: 100%;
    }
  }
  .thumbnail {
    max-width: 800px;
    .slick-list {
      margin: 0 -5px;
    }
    .slick-slide > div {
      padding: 0 5px;
    }
    .item {
      position: relative;
      transition: 0.5s;
      overflow: hidden;
      margin: 0 5px;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 1;
        background: linear-gradient(
          180deg,
          rgba(175, 214, 238, 0) 13.05%,
          #023257 100%
        );
      }
      .content {
        position: absolute;
        width: 100%;
        inset: auto 10px 35px 27px;
        font-weight: ${({ theme }) =>
          theme.pallete.typography.fontWeightSemiBold};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['lg']};
        line-height: 20px;
        color: ${({ theme }) => theme.pallete.blue.blue.main};
        z-index: 1;
      }
      img {
        width: 100%;
        height: 300px;
        position: relative;
        cursor: pointer;
        object-fit: cover;
      }
    }
  }

  .list .item {
    position: relative;
    overflow: hidden;
    transition: 0.5s;

    .content {
      width: 100%;
      color: ${({ theme }) => theme.pallete.common.white};
      h4 {
        margin: 15px 0;
        font-weight: ${({ theme }) => theme.pallete.typography.fontWeightBold};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['3xl']};
        line-height: 44px;
      }
      p {
        font-weight: ${({ theme }) =>
          theme.pallete.typography.fontWeightRegular};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['base']};
        line-height: 22px;
        text-align: justify;
      }
    }
  }
  @keyframes showContent {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    padding: 36px 16px 36px 16px;
    .slick-current {
      .thumbnail {
        .item {
          &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            z-index: 1;
            background: linear-gradient(
              180deg,
              rgba(175, 214, 238, 0) 13.05%,
              #023257 100%
            );
          }
        }
      }
    }
    .slider {
      justify-content: center;
      flex-wrap: wrap;
      height: 100%;
      &-left {
        display: flex;
        flex-direction: column;
      }
      .list .item .content {
        text-align: center;
        p {
          text-align: center;
        }
        h4 {
          font-size: ${({ theme }) => theme.pallete.typography.fontSize['2xl']};
          line-height: 32px;
        }
      }
      .thumbnail {
        margin-right: 0px;
        .slick-list {
          margin: 0 5px;
        }
        .slick-slide > div {
          padding: 0 -5px;
        }
      }
    }
  }
  @media ${({ theme }) => theme.pallete.device.tablet} {
    .slider {
      overflow: unset;
    }
    .thumbnail {
      width: 100%;
      .item {
        height: 100%;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .slider {
      &-left {
        display: unset;
      }
      .list .item .content {
        text-align: left;
        p {
          text-align: left;
        }
      }
    }
  }
`;

export { CarouselContainer };
