import React, { useEffect, useState } from "react";
import List from "../components/List";

export default function StaticPage() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    fetch('api/countries')
      .then((res) => res.json())
      .then(({ data }) => setRows(data));
  }, []);

  return (
    <List rows={rows} />
  )
}