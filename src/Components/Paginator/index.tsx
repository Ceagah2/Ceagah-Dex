import styled from 'styled-components';


interface PaginationProps {
  limit: number;
  offset: number;
  total: number;
}

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
// setting the number of buttons to be displayed. 9 is a good number, because i'll use the center of this, so it's 4 to each side, and the current page at the center;


const Paginator = (props: PaginationProps) => {
  const current = props.offset ? (props.offset / props.limit) + 1 : 1;
  // seting the current page position. if the we have a offset, we will set it to the current page position + 1, if we don't , we set to 1.
  const pages = Math.ceil(props.total / props.limit);
  // setting the total pages, dividing the total items by the limit of items per page, rounding to ceil.
  const first = Math.max(current - MAX_LEFT, 1);
  // setting the first button at the left. using max to compare, if it's negative, it turn into 1.

  return(
    <S.Container>
      {Array.from({ length: MAX_ITEMS })
      .map((_,index) => index + first)
      .map((page) => <li>{page}</li>)}
    </S.Container>
  );
}

const S = {
  Container: styled.ul``,
}

export default Paginator;