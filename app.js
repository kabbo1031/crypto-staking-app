let wallet = null;

document.getElementById("connectBtn").addEventListener("click", async function () {
    wallet = await connectWallet();
    log("Wallet connected");
});

document.getElementById("stakeBtn").addEventListener("click", async function () {
    const address = document.getElementById("contractAddress").value;
    const amount = document.getElementById("amount").value;

    if (!wallet || !address || !amount) {
        alert("Missing input");
        return;
    }

    await stakeTokens(address, wallet, amount);
    const balance = await getStakedBalance(address, wallet);
    updateStaked(balance);
});

document.getElementById("unstakeBtn").addEventListener("click", async function () {
    const address = document.getElementById("contractAddress").value;

    if (!wallet || !address) {
        alert("Missing input");
        return;
    }

    await unstakeTokens(address, wallet);
    const balance = await getStakedBalance(address, wallet);
    updateStaked(balance);
});
