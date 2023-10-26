const db = {
    "user": [
        { id: "1", name: "Antonio" }
    ],
};

async function list(tabla) {
    if (!db[tabla]){
        db[tabla] = [];
    }
    return db[tabla];

    console.log(db);
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    db[collection].push(data);
}

async function remove(tabla, id) {
    return true;
}

async function query(tabla, q) {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];

    return col.filter(item => item[key] === q[key])[0] || null;
}


module.exports = {
    list,
    get,
    upsert,
    remove,
};