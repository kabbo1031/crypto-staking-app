async function stakeTokens(contractAddress, wallet, amount) {
    const contract = new ethers.Contract(contractAddress, STAKING_ABI, wallet);
    const value = ethers.utils.parseUnits(amount, 18);

    const tx = await contract.stake(value);
    await tx.wait();
}

async function unstakeTokens(contractAddress, wallet) {
    const contract = new ethers.Contract(contractAddress, STAKING_ABI, wallet);
    const tx = await contract.unstake();
    await tx.wait();
}

async function getStakedBalance(contractAddress, wallet) {
    const contract = new ethers.Contract(contractAddress, STAKING_ABI, wallet);
    const balance = await contract.balanceOf(await wallet.getAddress());
    return ethers.utils.formatUnits(balance, 18);
}
