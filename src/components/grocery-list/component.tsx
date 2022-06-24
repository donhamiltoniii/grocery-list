import "./styles.css";

type GroceryItemProps = {
  item: string;
};

type GroceryListProps = {
  items: GroceryItemProps[];
};

const GroceryItem = ({ item }: GroceryItemProps) => (
  <div className="grocery-item">
    <input type="checkbox" name={item} id={item} />
    <label htmlFor={item}>{item}</label>
  </div>
);

export const GroceryList = ({ items }: GroceryListProps) => {
  return (
    <ul className="grocery-list">
      {items.map(({ item }: GroceryItemProps, i: number) => (
        <li key={`${item}-${i}`}>
          <GroceryItem item={item} />
        </li>
      ))}
    </ul>
  );
};
