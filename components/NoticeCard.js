import Link from "next/link";
import axios from "axios";

export default function NoticeCard({ notice, refresh }) {

  const deleteNotice = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(`/api/notices/${notice.id}`);

      refresh();

    } catch (error) {

      alert("Unable to delete notice.");

    }

  };

  return (

    <div className="border rounded-lg shadow-md p-5 bg-white">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          {notice.title}
        </h2>

        {notice.priority === "URGENT" && (

          <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">

            Urgent

          </span>

        )}

      </div>

      <p className="mt-3 text-gray-700">
        {notice.body}
      </p>

      <div className="mt-4">

        <p>

          <strong>Category:</strong> {notice.category}

        </p>

        <p>

          <strong>Publish Date:</strong>{" "}

          {new Date(notice.publishDate).toLocaleDateString()}

        </p>

      </div>

      {notice.image && (

        <img
          src={notice.image}
          alt="Notice"
          className="mt-4 rounded h-52 w-full object-cover"
        />

      )}

      <div className="flex gap-3 mt-5">

        <Link href={`/edit/${notice.id}`}>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">

            Edit

          </button>

        </Link>

        <button
          onClick={deleteNotice}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >

          Delete

        </button>

      </div>

    </div>

  );

}