import { IItem } from "../models/interface/item";

const Item = ({ id, author, width, height, url, download_url }: IItem) => {
  return (
    <div>
      <img src={url} alt={author} />
    </div>
  );
};

export default Item;
