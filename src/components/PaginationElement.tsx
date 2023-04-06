import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { PaginationItem, Pagination } from '@mui/material';
import { setCurrentPage } from '../reducers/reducers';

type PaginationProps = {
  currentPage: number;
  countPokemons: number;
};

export const PaginationElement = ({
  currentPage,
  countPokemons,
}: PaginationProps) => {
  const pages = Math.ceil(countPokemons / 20);
  const dispatch = useDispatch();

  const activePage =
    useLocation().search === ''
      ? currentPage
      : parseInt(useLocation().search.split('=')[1].split('&')[0]) / 20 + 1;

  return (
    <Pagination
      className="pagination"
      page={activePage}
      count={pages}
      onChange={() => dispatch(setCurrentPage(1))}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`?offset=${(Number(item.page) - 1) * 20}&limit=20`}
          {...item}
        />
      )}
    />
  );
};
