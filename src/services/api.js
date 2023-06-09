import axios from "axios";

async function getUserAuth(url, TOKEN) {
    try {
        return await axios.get(url, { headers: { "x-access-token": TOKEN } });
    } catch (error) {
        return error;
    }
    // const response = await (await fetch(url)).json();
    // return response;
}

async function getDatas(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        throw new Error(error);
    }
    // const response = await (await fetch(url)).json();
    // return response;
}

async function signup(datas) {
    try {
        return await axios.post("/user/signup", datas);
    } catch (error) {
        throw new Error(error);
    }
}

async function signin(datas) {
    try {
        return await axios.post("/user/signin", datas);
    } catch (error) {
        throw new Error(error);
    }
}

export { getUserAuth, getDatas, signup, signin };
