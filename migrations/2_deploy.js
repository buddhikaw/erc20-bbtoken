const BB9 = artifacts.require("BB9");

module.exports = async function (deployer) {
  await deployer.deploy(BB9, "BB9 test", "BB9");
}