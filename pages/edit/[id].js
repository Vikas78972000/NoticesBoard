import axios from "axios";
import NoticeForm from "../../components/NoticeForm";
const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function EditNotice({ notice }) {

  return (

    <div className="p-8">

      <NoticeForm notice={notice} />

    </div>

  );

}

export async function getServerSideProps({ params }) {

  try {

    const res = await axios.get(

       `${baseUrl}/api/notices/${params.id}`

    );

    return {

      props: {

        notice: res.data

      }

    };

  } catch {

    return {

      notFound: true

    };

  }

}