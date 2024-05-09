import mongoose from "mongoose";
import { Categoria } from "./models/categoria";

const connectionString = "mongodb+srv://uollazzi:uollazzi@cluster0.axxoeci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const insertCategoria = async (titolo: string, sottotitolo: string, descrizione: string) => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        let cat = new Categoria();
        cat.titolo = titolo;
        cat.sottotitolo = sottotitolo;
        cat.descrizione = descrizione;

        const r = await cat.save();

        return r;
    }
    catch (error: any) {
        console.error("Errore di inserimento");
    }
    finally {
        await mongoose.disconnect();
    }
}

export const getCategorie = async () => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        return await Categoria.find();
    }
    catch (error: any) {
        console.error("Errore di get");
    }
    finally {
        await mongoose.disconnect();
    }
}

export const getCategoriaById = async (id: string) => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        return await Categoria.findById(id);
    }
    catch (error: any) {
        console.error(error);
    }
    finally {
        await mongoose.disconnect();
    }
}

export const deleteCategoria = async (id: string) => {
    try {
        await mongoose.connect(connectionString, { dbName: "amazon" });

        return await Categoria.findByIdAndDelete(id);
        // return await Categoria.deleteOne({ _id: id });
    }
    catch (error: any) {
        console.error(error);
    }
    finally {
        await mongoose.disconnect();
    }
}