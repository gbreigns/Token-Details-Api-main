import { ethers } from "ethers";
import express from "express";


const app = express();

const ABI = [
  "function name() public view returns (string memory)",
  "function symbol() public view returns (string memory)",
  "function decimals() public view returns (uint8)",
  "function totalSupply() public view returns (uint256)"
];

const RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/";

const PROVIDER = new ethers.providers.JsonRpcProvider(RPC_URL);

// const contract_address = "0x3D9fAec732d07DB447F219e1bfa59F06e34532B6"

app.get("/", (req, res) => {
    res.send("Hello World");
})


app.get('/:contract_address', async (req, res) => {

    const contract_address = req.params.contract_address;

    const isAddress = ethers.utils.isAddress(contract_address);
    
    if(!isAddress) {
        return new Error("Contract Not An Etheruem Address")
    }

    const Contract = new ethers.Contract(contract_address, ABI, PROVIDER);

    // console.log(Contract);
    const name = await Contract.name();
    const symbol = await Contract.symbol();
    const decimals = await Contract.decimals();
    const totalsupplyInWei = await Contract.totalSupply(); 
    const totalsupply = ethers.utils.formatUnits(totalsupplyInWei, decimals)
    // const decimals = decimalsBigNumber.toNumber();

    res.send({name: name, symbol: symbol, decimals: decimals, totalsupply: totalsupply});
})


const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));