export type ChainInfo = {
  name: string
  logo: string
  color: string
}

export const CHAIN_INFO: Record<string, ChainInfo> = {
  "OP Mainnet": {
    name: "OP Mainnet",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqidBq62tBzMjwxpb9WljM3BuKe6oEHzbJ6Q&s",
    color: "bg-red-500"
  },
  "Ink": {
    name: "Ink",
    logo: "🟣",
    color: "bg-purple-500"
  },
  "Unichain": {
    name: "Unichain",
    logo: "🦄",
    color: "bg-pink-500"
  },
  "Soneum": {
    name: "Soneum",
    logo: "⚫",
    color: "bg-black"
  },
  "Mode": {
    name: "Mode",
    logo: "https://raw.githubusercontent.com/mode-network/brandkit/refs/heads/main/Assets/Logo/Token.png",
    color: "bg-yellow-500"
  },
  "Zora": {
    name: "Zora",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE2QFmWjvYbLw/company-logo_200_200/company-logo_200_200/0/1679507991235/ourzora_logo?e=2147483647&v=beta&t=tpQ_QoYtwN-mbmjcahz00BK6eDNXTBe3R5QClSDOuZM",
    color: "bg-blue-500"
  },
  "Arena-Z": {
    name: "Arena-Z",
    logo: "⚔️",
    color: "bg-gray-800"
  },
  "Base": {
    name: "Base",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8GRxtGh0f0b28Q1cIGJ2zQu4rkZ4HX-IGQ&s",
    color: "bg-blue-600"
  },
  "World Chain": {
    name: "World Chain",
    logo: "https://raw.githubusercontent.com/cowprotocol/token-lists/main/src/public/images/1/0x163f8c2467924be0ae7b5347228cabf260318753/logo.png",
    color: "bg-gray-900"
  },
  "Lisk": {
    name: "Lisk",
    logo: "�",
    color: "bg-blue-400"
  },
  "Mint": {
    name: "Mint",
    logo: "🌿",
    color: "bg-green-500"
  },
  "Celo": {
    name: "Celo",
    logo: "�",
    color: "bg-yellow-600"
  },
  "Oorth Nexus": {
    name: "Oorth Nexus",
    logo: "⭐",
    color: "bg-orange-500"
  },
  // Legacy chains that might still be in data
  "Ethereum": {
    name: "Ethereum",
    logo: "https://img.logokit.com/crypto/ETH?token=pk_fr9697dc0837477be13e3a",
    color: "bg-blue-600"
  }
}

export const ALL_CHAINS = Object.keys(CHAIN_INFO)