const cartFetchConfig = { serverId: 6391, active: true };

const cartFetchHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6391() {
    return cartFetchConfig.active ? "OK" : "ERR";
}

console.log("Module cartFetch loaded successfully.");