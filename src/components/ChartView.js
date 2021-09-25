import { useGlobalContext } from "context";
import { useEffect, useMemo, useState } from "react";
import Chart from "./Chart";

export default function ChartView() {
  const { URL } = useGlobalContext();

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [tokenCount, setTokenCount] = useState([]);
  useEffect(() => {
    fetch(`${URL}/token/getMonthCount`, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        const urlList = data.sort(function (a, b) {
          return a._id - b._id;
        });
        urlList.map((item) =>
          setTokenCount((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              "New Tokens": item.total,
              count: item.total,
            },
          ])
        );
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line
  }, [MONTHS]);

  return (
    <div className="dashboard">
      <Chart
        data={tokenCount}
        title="Token Analytics"
        grid
        dataKey="New Tokens"
      />
    </div>
  );
}
