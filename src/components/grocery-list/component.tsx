import "./styles.css";

type GroceryItemProps = {
  item: string;
};

type GroceryListProps = {
  items: string[];
};

const Item = ({ item }: GroceryItemProps) => (
  <div className="grocery-item">
    <input type="checkbox" name={item} id={item} />
    <label htmlFor={item}>{item}</label>
  </div>
);

export const GroceryList = ({ items }: GroceryListProps) => {
  return (
    <ul className="grocery-list">
      {items.map((item: string, i: number) => (
        <li key={`${item}-${i}`}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};
