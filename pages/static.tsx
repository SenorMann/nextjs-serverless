import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";

export default function StaticPage() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    fetch('api/countries')
      .then((res) => res.json())
      .then(({ data }) => setRows(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <List rows={rows} />
      </main>
      <Footer />
    </>
  )
}
