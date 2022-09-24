import { useRouter } from "next/router";

const User = (props) => {
    // console.log(props, 'cuando llegan las props');
    const router = useRouter();
    const { id } = router.query;
    // console.log(id);

    return (<h4>Profile data</h4>)
}

User.getInitialProps = (ctx) => {
    // console.log('sale el pedido al back con el id', ctx.query.id)
    return { data_id: ctx.query.id}
}

export default User;