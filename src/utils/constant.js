import mint from "./MintNFT.json";
import token from "./BEP20.json";
import dsltestnet from "./DSLTestnet.json";
import dslmainnet from "./DSLMainnet.json";
import usdsc from "./USDSC.json";
import S39 from "./S39.json";
import Quest from "./Quest.json";
export const mintAddressTestnet = "0xb6720F00c4ce661FE3bEC23eD7d59Bc6D038655F";
export const mintABITestnet = mint.abi;

// export const private_key = "6fceaa9bd7f352b9258617e7710d7112fa28b73b19d0cdb45320a187c7d076de";

export const RPC = "https://data-seed-prebsc-1-s1.binance.org:8545";

export const chainId = "97";

export const USDSCtokenAddressTestnet =
  "0x474DeB3F462A5A86B885AadB4Ed22D5bBA93eAbb";
export const USDSCtokenABITestnet = token.abi;

export const DSLtokenAddressTestnet =
  "0xb1eCd4C8C6EEF40EF4EB6a066821C7b3227083d5";
export const DSLtokenABITestnet = dsltestnet.abi;

export const USDSCtokenAddressMainnet =
  "0x13b852e276f10281C72ccF33EdF81d81DD198Aae";
export const USDSCtokenABIMainnet = usdsc.abi;

export const DSLtokenAddressMainnet =
  "0x4A1530Fb85BdB9250Db2bE251584874179eB8Dc5";
export const DSLtokenABIMainnet = dslmainnet.abi;

export const S39tokenAddressTestnet =
  "0x98a094ae9CB1f770cA0f800588B09e4729f2CDaD";
export const S39tokenABITestnet = S39.abi;

export const QuesttokenAddressTestnet =
  "0x01461B5EB656Bb3735Ea3bBED3760628Ad507D02";
export const QuesttokenABITestnet = Quest.abi;
