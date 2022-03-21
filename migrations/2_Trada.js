const TradaCoin = artifacts.require("Trada");

module.exports = function (deployer) {
  deployer.deploy(TradaCoin);
};
