type ActivityProps = {
  activity: string[];
}

const ActivityList = ({
  activity
} : ActivityProps) => {
  return (
    <>
        <ul>
          {activity.map((activity, index) => (<li key = {index}>{activity}</li>))}
        </ul>
      <hr />
    </>
  );
};

  export default ActivityList
  