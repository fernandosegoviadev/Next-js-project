
const Users = (props) => {
    console.log(props, 'props en users')
    return (
        <ul className="list-group">
            {
                props && props.users &&  props.users?.map(user => (
                    <li className="list-group-item list-group-item-action"
                    key={user.id}
                    >
                        <h5>{user.name}</h5>
                        <p>Email: {user.email}</p>
                    </li>
    
                ))
            }

        </ul>
    )
}

export default Users;