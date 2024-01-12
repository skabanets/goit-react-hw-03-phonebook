import {
  FilterInput,
  FilterLabel,
  FilterWrpper,
  ResetBtn,
} from './Filter.styled';

export const Filter = ({ value, onChange, onClick }) => {
  return (
    <FilterWrpper>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
      <ResetBtn type="button" onClick={onClick}>
        Reset
      </ResetBtn>
    </FilterWrpper>
  );
};
