import ActivityList from "./ActivityList"

type MemberProps = {
  name: string;
  course: string;
  status: string;
  email: string;
  phone: string;
  activity: string[]
  };

  const MemberCard = ({
    name,
    course,
    status,
    email, 
    phone,
    activity
  } : MemberProps) => {
    return (
      <>
        <p>{name}</p>
        <p>Course: {course}</p>
        <p>Status: {status}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        <ActivityList 
          activity={activity}
        />
      </>
    );
  };

export default MemberCard