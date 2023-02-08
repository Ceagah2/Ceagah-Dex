import styled from 'styled-components';
import { colors } from '../../styles/themes';


interface PaginationProps {
  total: number;
  limit: number;
  offset: number;
  setOffset: (offset: number) => void;
}

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

// setting the number of buttons to be displayed. 9 is a good number, because i'll use the center of this, so it's 4 to each side, and the current page at the center;


const Paginator = ({total, limit, offset, setOffset}:PaginationProps) => {
  const current = offset ? (offset / limit) + 1 : 1;
  // setting the current page position. if the we have a offset, we will set it to the current page position + 1, if we don't , we set to 1.
  const pages = Math.ceil(total / limit);
  // setting the total pages, dividing the total items by the limit of items per page, rounding to ceil.
  const first = Math.max(current - MAX_LEFT, 1);
  // setting the first button at the left. using max to compare, if it's negative, it turn into 1.

  function onPageChange(page: number) {
    setOffset((page - 1) * limit);
    console.log('PAGE NUMBER', page)
  }

  return(
    <S.Container>
      <S.ContainerList>
        <S.ListItem>
          <S.PrevAndNextButton
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
          Previous
        </S.PrevAndNextButton>
        </S.ListItem>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_,index) => index + first)
        .map((page) =>( 
          <S.ListItem key={page}>
            <S.Button onClick={() => onPageChange(page)}>
              {page}
            </S.Button>
          </S.ListItem>
        ))}
          <S.ListItem>
          <S.PrevAndNextButton
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
          Next
        </S.PrevAndNextButton>
        </S.ListItem>
      </S.ContainerList>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ContainerList: styled.ul`
    width: 30%;
    display: flex;
    justify-content: space-around;
  `,
  ListItem: styled.li`
    list-style: none;
  `,
  Button: styled.button`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    transition: background ease-in-out .1s linear;
    &:hover {
      background: ${colors["dark"]};
      color: ${colors["white"]};
    }
  `,
  PrevAndNextButton : styled.button`
    width: 75px;
    height: 25px;
    border-radius: 20px;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer' };
    border: none;
    transition: background ease-in-out .1s  ;

    &:hover {
      background: ${colors["dark"]};
      color: ${colors["white"]};
    }
  `,
}

export default Paginator;