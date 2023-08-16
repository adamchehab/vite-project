import { useState } from "react";
import { fruitsList } from "./data.tsx";
import "./App.css";

function SearchBar({ title, placeholder, value, handler, style }) {
	return (
		<label>
			{title}
			<input
				placeholder={placeholder}
				value={value}
				onChange={handler}
				style={style}
			/>
		</label>
	);
}

function ItemsList({ list }) {
	return (
		<ul>
			{list.map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);
}

function SearchItemsList() {
	const [searchItem, setSearchItem] = useState("");

	const filteredFruitList = fruitsList.filter((item) =>
		item.name.toLowerCase().includes(searchItem.toLowerCase())
	);

	function handleSearchItem(e) {
		setSearchItem(e.target.value);
	}

	return (
		<div className="searchPanel">
			<SearchBar
				title="Fruits:"
				placeholder="fruit name"
				value={searchItem}
				handler={handleSearchItem}
				style={{ marginLeft: "20px" }}
			/>
			<ItemsList list={filteredFruitList} />
		</div>
	);
}

export default function Page() {
	return (
		<div className="bg-slate-100">
			<SearchItemsList />
			<button type="button" className="btn btn-primary">
				Primary
			</button>
			<h1 className="text-3xl font-thin underline text-blue-500">Hello world!</h1>
		</div>
	);
}
