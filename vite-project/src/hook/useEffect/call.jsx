import { useEffect, useState } from "react";
import Itemss from "./item";

function CallAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    async function fethch() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);

      setLoading(false);
    }

    if (isShow) {
      fethch();
    } else {
      console.log("aa");
    }
  }, [isShow]);

  return (
    <>
      <button
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
      >
        Paus
      </button>
      {loading && <p>Đang tải ... </p>}

      {!loading && data && (
        <div className="list">
          {data.map((item) => (
            <Itemss item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default CallAPI;
