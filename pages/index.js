import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import NoticeCard from "../components/NoticeCard";

export default function Home() {

  const [notices, setNotices] = useState([]);

  const getNotices = async () => {

    try {

      const res = await axios.get("/api/notices");

      setNotices(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    getNotices();

  }, []);

  return (

    <div className="max-w-6xl mx-auto p-6">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">

          Notice Board

        </h1>

        <Link href="/add">

          <button className="bg-green-600 text-white px-5 py-2 rounded">

            Add Notice

          </button>

        </Link>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {notices.length > 0 ? (

          notices.map((notice) => (

            <NoticeCard
              key={notice.id}
              notice={notice}
              refresh={getNotices}
            />

          ))

        ) : (

          <p>No notices found.</p>

        )}

      </div>

    </div>

  );

}