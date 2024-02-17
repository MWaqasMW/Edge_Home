import "./service.css"
import Header from "../../componets/header/Header"
import FilterCard from "../../componets/filterCard/FilterCard"
import SerachList from "../../componets/serarchList/SerachList";
const Service = () => {
  const products = [
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 },
    { id: 4, name: 'Product D', price: 49.99 },
    { id: 5, name: 'Product E', price: 59.99 },
    { id: 6, name: 'Product F', price: 69.99 },
    { id: 7, name: 'Product G', price: 79.99 },
    { id: 8, name: 'Product H', price: 89.99 },
    { id: 9, name: 'Product I', price: 99.99 },
    { id: 10, name: 'Product J', price: 109.99 }
  ];
  return (
    <div>
      <Header />
      <div className="d-flex container mt-5">
        <SerachList />
        <div>
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        <FilterCard />
        </div>
      </div>
    </div>
  )
}

export default Service