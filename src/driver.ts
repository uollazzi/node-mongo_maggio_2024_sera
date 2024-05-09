import { MongoClient, ObjectId } from "mongodb";

const connectionString = "mongodb+srv://uollazzi:uollazzi@cluster0.axxoeci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const insertProdotto = async (nome: string, prezzo: number) => {
    const client = new MongoClient(connectionString);

    try {
        const db = client.db("amazon");
        const prodottiCollection = db.collection("prodotti");

        const prodotto = {
            nome,
            prezzo
        }

        const r = await prodottiCollection.insertOne(prodotto);

        return r;
    } catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
}

export const getProdotti = async () => {
    const client = new MongoClient(connectionString);

    try {
        const db = client.db("amazon");
        const prodottiCollection = db.collection("prodotti");

        return await prodottiCollection.find().toArray();
    } catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
}

export const deleteProdotto = async (id: string) => {
    const client = new MongoClient(connectionString);

    try {
        const db = client.db("amazon");
        const prodottiCollection = db.collection("prodotti");

        return await prodottiCollection.deleteOne({
            _id: new ObjectId(id)
        })
    } catch (error) {
        console.error(error);
    }
    finally {
        await client.close();
    }
}