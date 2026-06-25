import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function NoticeForm({ notice }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: notice?.title || "",
    body: notice?.body || "",
    category: notice?.category || "GENERAL",
    priority: notice?.priority || "NORMAL",
    publishDate: notice?.publishDate
      ? notice.publishDate.substring(0, 10)
      : "",
    image: notice?.image || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (notice) {
        await axios.put(`/api/notices/${notice.id}`, formData);
      } else {
        await axios.post("/api/notices", formData);
      }

      router.push("/");
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 border"
      >
        <h1 className="text-3xl font-bold text-center mb-8">
          {notice ? "Edit Notice" : "Add Notice"}
        </h1>

        {/* Title */}
        <div className="grid grid-cols-4 items-center gap-4 mb-5">
          <label className="font-semibold text-lg">
            Title :
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="col-span-3 border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Body */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          <label className="font-semibold text-lg">
            Body :
          </label>

          <textarea
            name="body"
            rows="5"
            value={formData.body}
            onChange={handleChange}
            className="col-span-3 border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div className="grid grid-cols-4 items-center gap-4 mb-5">
          <label className="font-semibold text-lg">
            Category :
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="col-span-3 border rounded-md p-2"
          >
            <option value="EXAM">Exam</option>
            <option value="EVENT">Event</option>
            <option value="GENERAL">General</option>
          </select>
        </div>

        {/* Priority */}
        <div className="grid grid-cols-4 items-center gap-4 mb-5">
          <label className="font-semibold text-lg">
            Priority :
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="col-span-3 border rounded-md p-2"
          >
            <option value="NORMAL">Normal</option>
            <option value="URGENT">Urgent</option>
          </select>
        </div>

        {/* Publish Date */}
        <div className="grid grid-cols-4 items-center gap-4 mb-5">
          <label className="font-semibold text-lg">
            Publish Date :
          </label>

          <input
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
            className="col-span-3 border rounded-md p-2"
            required
          />
        </div>

        {/* Image */}
        <div className="grid grid-cols-4 items-center gap-4 mb-8">
          <label className="font-semibold text-lg">
            Image :
          </label>

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL (Optional)"
            className="col-span-3 border rounded-md p-2"
          />
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            {notice ? "Update Notice" : "Create Notice"}
          </button>
        </div>
      </form>
    </div>
  );
}