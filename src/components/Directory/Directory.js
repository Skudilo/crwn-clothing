import './Directory.scss'
import CategoryItem from "../CategoryItem";

const Directory = ({categories}) => (
	<div className="direction-container">
		{categories.map(category => (
			<CategoryItem key={category.id} category={category}/>
		))}
	</div>
);

export default Directory;