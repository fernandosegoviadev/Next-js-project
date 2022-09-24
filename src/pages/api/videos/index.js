import { dbConnect } from 'utils/mongoose';
import Videos from 'models/Videos';

dbConnect();

export default async function handler(req, res) {
    const { method, body } = req;

    // Se puede mejorar mucho mucho pero implica tiempo

    switch (method) {
        case "GET":
            const videos = await Videos.find();
            return res.status(200).json({ data: videos })

        case "POST":
            const newVideo = await Videos.create(body)
            return res.status(200).json({ data: newVideo, msj: "created" })

        case "PUT":
            const editVideo = await Videos.findOneAndUpdate(
                { _id: body._id }, body, { new: true });
            return res.status(200).json({ data: editVideo, msj: "updated" })

        case "DELETE":
            const deleteVideo = await Videos.findOneAndDelete({ _id: body._id })
            return res.status(200).json({ data: deleteVideo, msj: "deleted" })

        default:
            return res.status(400).json(
                { msg: 'This method is not supported' }
            );
    }


}
