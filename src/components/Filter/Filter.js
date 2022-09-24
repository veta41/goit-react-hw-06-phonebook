import PropTypes from 'prop-types';
import { Label, Input, FilterText } from './Filter.styled';

const Filter = ({ onChange, value }) => {
  return (
    <Label>
      <FilterText>Find contacts by name</FilterText>
      <Input onChange={onChange} type="text" name="filter" value={value} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
