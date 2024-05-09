import * as driver from "./driver";
import * as orm from "./orm";

const mainDriver = async () => {
    console.log(await driver.insertProdotto("Salame", 12));
    console.log(await driver.deleteProdotto("663d0802174810050d6db7c2"));
    console.log(await driver.getProdotti());
}

const mainOrm = async () => {
    // console.log(await orm.insertCategoria("Strumenti Musicali", "Strumenti", "Categoria di strumenti musicali"));
    // console.log(await orm.getCategorie());
    console.log(await orm.deleteCategoria("663d1ae320298dabffdc3d8a"));
}

// mainDriver();
mainOrm();