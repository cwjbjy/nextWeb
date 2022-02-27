import { useCallback } from "react";
import Image from "next/image";
export default function Card({ children, url, list }) {
  const handlerClick = useCallback((value) => {
    window.open(value);
  }, []);
  return (
    <div className="card">
      <div className="card-header">
        <div className="title" style={{ backgroundImage: `url(${url})` }}>
          {children}
        </div>
      </div>
      <div className="card-body">
        {list.map((item, index) => (
          <div
            key={index}
            className="card-item"
            onClick={() => handlerClick(item.url)}
          >
            <Image
              src={item.thumbnail_pic_s}
              alt="Picture of the author"
              width={228}
              height={128}
              loading={"lazy"}
            />
            <div className="describe">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
