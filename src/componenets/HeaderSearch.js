import './Header.scss';

function HeaderSearch() {
  return (
    <div className="header__search">
    	<label className="visually-hidden" for="job-category-select">Job Categories</label>
    	<select id="job-category-select" className="header__search-select">
    		<option value="1">Select a Job category</option>
    		<option value="1">1</option>
    		<option value="2">2</option>
    		<option value="3">3</option>
    		<option value="4">4</option>
    	</select>
    </div>
  );
}

export default HeaderSearch;