import { Component } from "react";
import PropTypes from "prop-types";
import Style from "./Filter.module.scss";

class Filter extends Component {
  render() {
    const { filter, onFilter } = this.props;
    return (
      <>
        <form className={Style.form}>
          <label>
            <h3>Find contacts by name:</h3>
            <input
              type="text"
              value={filter}
              onChange={onFilter}
              className={Style.input}
            />
          </label>
        </form>
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
