import './App.css'
import MemberCard from './MemberCard.tsx'

const App = () => {
  const members = [
    {
      name: "Mara Syldeni Gadgad",
      course: "BS Information Technology",
      status: "Active",
      email: "20198203@s.ubaguio.edu",
      phone: "09479772134",
      activity: ["Orientation", "Workshop", "Club Meeting"]
    },

    {
      name: "Juan Dela Cruz",
      course: "BS Information Technology",
      status: "Active",
      email: "juandelacruz@gmail.com",
      phone: "09479772134",
      activity: ["Fundraiser", "Seminar", "Volunteer Event"]
    },

    {
      name: "Sandara Rai",
      course: "BS Information Technology",
      status: "Active",
      email: "sandararai@gmail.com",
      phone: "09479772134",
      activity: ["Project Planning", "Social Event", "Leadership Training"]
    }
  ]


  return (
    <>
      <h1>UNIVERSITY CLUB MEMBER DASHBOARD</h1>
    
      <section>
        <h3>Member List</h3>

        {members.map((members, index) => (
          <MemberCard
            key = {index}
            name = {members.name}
            course = {members.course}
            status = {members.status}
            email = {members.email}
            phone = {members.phone}
            activity = {members.activity}
          />
        ))}
      </section>
    </>
  )
}


export default App
