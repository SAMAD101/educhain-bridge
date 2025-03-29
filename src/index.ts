import { ethers } from "ethers";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const wallet = process.env.WALLET || "";

const BASE_URL = "https://yuzu-api-production.r8edev.xyz/bridge/arbMainnet/eduMainnet";

export async function approve(pubkey: String, amount: String) {
    try {
        const response = await axios.get(`${BASE_URL}/${pubkey}/approve/edu/${amount}`);
        console.log(response.data);
        return response.data; // Returns the EVM transaction object
    } catch (error) {
        console.error('Error in approve function:', error);
        throw error;
    }
}

export async function deposit(pubkey: String, amount: String) {
    try {
        const response = await axios.get(`${BASE_URL}/${pubkey}/deposit/edu/${amount}`);
        console.log(response.data);
        return response.data; // Returns the EVM transaction object
    } catch (error) {
        console.error('Error in deposit function:', error);
        throw error;
    }
}

export async function withdraw(pubkey: String, amount: String) {
    try {
        const response = await axios.get(`${BASE_URL}/${pubkey}/withdraw/edu/${amount}`);
        console.log(response.data);
        return response.data; // Returns the EVM transaction object
    } catch (error) {
        console.error('Error in withdraw function:', error);
        throw error;
    }
}

export async function getBalanceArb(pubkey: String) {
    try {
        const response = await axios.get(`https://yuzu-api-production.r8edev.xyz/balance/arbMainnet/${pubkey}/arb`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error in getBalanceArb function:', error);
        throw error;
    }
}

export async function getBalanceEdu(pubkey: String) {
    try {
        const response = await axios.get(`https://yuzu-api-production.r8edev.xyz/balance/eduMainnet/${pubkey}/edu`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error in getBalanceEdu function:', error);
        throw error;
    }
}
