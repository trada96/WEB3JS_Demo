const Web3 = require('web3');
const Coin = require('./constracts/Trada.json');

const init = async () => {
    const web3 = new Web3("http://127.0.0.1:9545/");
    const contract = await new web3.eth.Contract(Coin.abi, '0x1918AF574f7acA2B3Bf00202097b9f047fcad14C');

    // Call không tốn gas fee
    const name = await contract.methods.name().call();
    const symbol = await contract.methods.symbol().call();
    const decimals = await contract.methods.decimals().call();

    const Inibalance = await contract.methods.balanceOf('0x503c214aec310d900a55dc7551ee9144f76f4fca').call();
    
    await contract.methods.transfer('0x7c04ed7910cbb89a399e1d7cc028b877d3badc51', 1000)
                        .send({from:'0x503c214aec310d900a55dc7551ee9144f76f4fca'});
    const balance = await contract.methods.balanceOf('0x503c214aec310d900a55dc7551ee9144f76f4fca').call();
    const receiveBalance =  await contract.methods.balanceOf('0x7c04ed7910cbb89a399e1d7cc028b877d3badc51').call();
    console.log(name, symbol, decimals, Inibalance, balance, receiveBalance);
    // console.log(Inibalance);

}

init();