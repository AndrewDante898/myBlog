import { MongoClient} from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;

        if (!email ||
            !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !message ||
        message.trim() ==="") {
            res.status(422).json({ message: 'Invalid input.'});
            return;
        }

        //store in db
        const newMessage = {
            email,
            name,
            message
        };

        let client;

        try {
            client = await MongoClient.connect(
                // 'mongodb+srv://agentandraw:homies4life@cluster0.ksqdnae.mongodb.net/my-site'
            'mongodb+srv://agentandraw:homies4life@cluster0.ksqdnae.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0'
            );

        } catch (error) {
            res.status(500).json({message: 'Could not connect to db.' })
            return;
        }

        const db = client.db()

        try {
            const result
                = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed' });
            return;
        }

        client.close();

        console.log(newMessage);

        res
            .status(201)
            .json({ message: 'Successfully stored message!', message: newMessage});
    }
}
//mongoDb id JL5P6TdaqK0CPGJU
//mongodb://atlas-sql-664790d58bc8f43790fc58a6-mb5am.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin
//database sample_mflix

export default handler;