
const UserCard = (props) => {
    const {id, username, email } = props.value;
  return (
    <>
       <div className="table-inner">
        <table className="table table-boardered table-info">
          <tbody>
            <tr>
              <th className="w-25">ID:</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th className="w-25">Username:</th>
              <td>{username}</td>
            </tr>
            <tr>
              <th className="w-25">Email ID:</th>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserCard;
