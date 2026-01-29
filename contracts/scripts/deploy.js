async function main() {
  const EchoRegistry = await ethers.getContractFactory("EchoRegistry");
  const echo = await EchoRegistry.deploy();
  await echo.deployed();
  console.log("EchoRegistry deployed at:", echo.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
