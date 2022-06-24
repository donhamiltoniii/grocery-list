import { GroceryList } from "../../components/grocery-list";
import "./styles.css";

import { groceries } from "../../data/grocery-list";

export const App = () => {
  return (
    <div className="app" data-testid="app-container">
      <h1>Grocery List</h1>
      <GroceryList items={groceries} />
    </div>
  );
};
