import React from "react";
import SortBy from "./SortBy";

export default class Filters extends React.Component {
  render() {
    const {filters:{sort_by}} = this.props;
    const {onChangeFilters, onChangePage, page} = this.props
    return (
      <form className="mb-3">
        <SortBy onChangeFilters={onChangeFilters} sort_by={sort_by}/>
        <div className="btn-group">
          <button
              disabled={page === 1}
              type="button"
              className="btn btn-light"
              onClick={()=>onChangePage(page - 1)}>Назад</button>
          <button
              type="button"
              className="btn btn-light"
              onClick={()=>onChangePage(page + 1)}>Вперед</button>
        </div>
      </form>
    );
  }
}
