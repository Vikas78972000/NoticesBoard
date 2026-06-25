import axios from "axios";
import NoticeForm from "../../components/NoticeForm";

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

      `http://localhost:3000/api/notices/${params.id}`

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