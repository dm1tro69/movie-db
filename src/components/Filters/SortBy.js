import React, {Component} from 'react';
import PropTypes from "prop-types";

class SortBy extends Component {
    static propTypes = {
        onChangeFilters: PropTypes.func.isRequired,
        sort_by: PropTypes.string.isRequired
    }
    static defaultProps = {
        options: [
            {
                label: 'Популярные по убыванию',
                value: 'popularity.desc'
            },
            {
                label: 'Популярные по возростанию',
                value: 'popularity.asc'
            },
            {
                label: 'Рейтинг по убыванию',
                value: 'vote_average.desc'
            },
            {
                label: 'Рейтинг по возростанию',
                value: 'vote_average.asc'
            }
        ]

    }
    render() {
        const {sort_by, onChangeFilters, options} = this.props;


        return (

                <div className="form-group">
                    <label htmlFor="sort_by">Сортировать по:</label>
                    <select
                        className="form-control"
                        value={sort_by}
                        id={'sort_by'}
                        name={'sort_by'}
                        onChange={onChangeFilters}>
                        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        {/*<option value="popularity.desc">Популярные по убыванию</option>*/}
                        {/*<option value="popularity.asc">Популярные по возростанию</option>*/}
                        {/*<option value="vote_average.desc">Рейтинг по убыванию</option>*/}
                        {/*<option value="vote_average.asc">Рейтинг по возростанию</option>*/}
                    </select>
                </div>

        );
    }
}

export default SortBy;
