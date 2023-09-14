"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94228],{22130:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});s(67294);var a=s(85893),n=s(11151);const o={title:"Flow User Accounts & Wallets",sidebar_title:"User Accounts & Wallets"},r=void 0,i={unversionedId:"tutorials/user-accounts-and-wallets",id:"version-stable/tutorials/user-accounts-and-wallets",title:"Flow User Accounts & Wallets",description:"Each Flow blockchain user owns an account that holds their digital assets (e.g. currencies or NFTs). A Flow account is identified by an 8-byte address and is controlled by one or more public/private key pairs. Whoever has access to the private key can sign a transaction to access the assets inside the account.",source:"@site/versioned_docs/version-stable/tutorials/user-accounts-and-wallets.md",sourceDirName:"tutorials",slug:"/tutorials/user-accounts-and-wallets",permalink:"/docs/tutorials/user-accounts-and-wallets",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/user-accounts-and-wallets.md",tags:[],version:"stable",lastUpdatedBy:"Alex",lastUpdatedAt:1694724388,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{title:"Flow User Accounts & Wallets",sidebar_title:"User Accounts & Wallets"},sidebar:"tutorials",previous:{title:"Testnet Testing Guidelines",permalink:"/docs/tutorials/testnet-testing"}},l={},c=[{value:"Interacting with User Accounts &amp; Wallets",id:"interacting-with-user-accounts--wallets",level:2},{value:"Connecting Wallets &amp; Dapps",id:"connecting-wallets--dapps",level:2},{value:"Flow Client Library (FCL)",id:"flow-client-library-fcl",level:3},{value:"Dapp Custody",id:"dapp-custody",level:3},{value:"Recommendation",id:"recommendation",level:3}];function d(e){const t=Object.assign({p:"p",h2:"h2",em:"em",a:"a",h3:"h3",ul:"ul",li:"li",strong:"strong"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Each Flow blockchain user owns an account that holds their digital assets (e.g. currencies or NFTs). A Flow account is identified by an 8-byte address and is controlled by one or more public/private key pairs. Whoever has access to the private key can sign a transaction to access the assets inside the account."}),"\n",(0,a.jsx)(t.h2,{id:"interacting-with-user-accounts--wallets",children:"Interacting with User Accounts & Wallets"}),"\n",(0,a.jsx)(t.p,{children:"Most blockchain users manage their accounts with the help of a crypto wallet, and the same is true on Flow. In short, a wallet is a piece of software or hardware that stores the private key associated with an account."}),"\n",(0,a.jsxs)(t.p,{children:["When talking about user accounts and wallets, we use the term ",(0,a.jsx)(t.em,{children:"custodian"})," to refer to the party that stores the private key for a user account. Hardware wallets, like those provided by Ledger, allow users to be their own custodian, whereas hosted software wallets, like those provided by Dapper Wallet, can act as the custodian on behalf of the user."]}),"\n",(0,a.jsx)(t.h2,{id:"connecting-wallets--dapps",children:"Connecting Wallets & Dapps"}),"\n",(0,a.jsx)(t.p,{children:"Dapps allow users to store their data in their own accounts, rather than a centralized database. But in order for dapps to work, they still need to be able to securely access a user\u2019s account from time to time."}),"\n",(0,a.jsxs)(t.p,{children:["For example, to purchase an NFT from an artist on the ",(0,a.jsx)(t.a,{href:"https://www.versus-flow.art/",children:"Versus auction website"}),", a user will need to send a transaction that transfers funds from their account to the Versus contract account. This transaction is prepared and initialized by the Versus application before being approved by the user."]}),"\n",(0,a.jsx)(t.h3,{id:"flow-client-library-fcl",children:"Flow Client Library (FCL)"}),"\n",(0,a.jsxs)(t.p,{children:["The Flow Client Library (FCL) is a framework that ",(0,a.jsx)(t.a,{href:"https://www.onflow.org/post/inside-flow-the-power-of-simplicity-with-fcl",children:"standardizes and simplifies the way dapps and wallets interact with each other"}),". By using FCL, a dapp developer can support a variety of wallet providers with a few lines of code."]}),"\n",(0,a.jsx)(t.p,{children:"FCL provides the following functionality out of the box:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"User registration and login"}),"\n",(0,a.jsx)(t.li,{children:"Transaction signing and submission"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"FCL-powered dapps are free to construct transactions which are then passed to the user\u2019s wallet for signing, all without gaining access to the user\u2019s private key. Users can onboard themselves to any FCL-enabled dapp in the Flow blockchain ecosystem and can use the same wallet provider across different dapps."}),"\n",(0,a.jsx)(t.p,{children:"In addition to the above, FCL-powered dapps have the following benefits:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Network effects:"})," FCL is an evolving ecosystem that will support additional wallets, payment providers and identity management solutions as it grows. FCL-powered dapps and their users will benefit directly from this growth."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Reduced technical complexity:"})," your dapp does not need to secure private keys or sign transactions, and can instead rely on 3rd-party wallet providers to manage this complexity."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Fee payments:"})," in many cases, wallet providers will cover storage and account creation fees for their wallet users, meaning you don\u2019t have to."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"Sample interaction: a user clicks a button to purchase an NFT from your storefront. Your dapp submits a transaction request to the user\u2019s wallet. The wallet displays a prompt to the user, asking them to approve or deny the transaction. After approval, the wallet signs and submits the transaction, then delivers the result to your dapp."})}),"\n",(0,a.jsx)(t.h3,{id:"dapp-custody",children:"Dapp Custody"}),"\n",(0,a.jsx)(t.p,{children:"If your dapp does not use FCL, you will need to run your own wallet infrastructure and act as the custodian for your users, rather than relying on 3rd-party wallets. In this case, you as the dapp developer are responsible for securing your users\u2019 private keys."}),"\n",(0,a.jsx)(t.p,{children:"Under this model, the accounts in your control can only be used with your application. Users will need separate accounts for other applications."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"Sample interaction: a user clicks a button to purchase an NFT from your storefront. This sends an API request to your dapp\u2019s backend, which holds the user\u2019s private key. Your dapp backend then signs and submits a transaction on behalf of the user."})}),"\n",(0,a.jsx)(t.p,{children:"Should your dapp take custody of user accounts? In most cases, no. We hope that you are able to focus on the experience you wish to create, without the complexity, legal responsibility, and limitations that come with being a custodian. We also want users to be able to freely experience many dapps without needing to manage a separate account for each."}),"\n",(0,a.jsx)(t.p,{children:"With that said, there are circumstances where you may want to be a custodian:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You are building an dapp on a platform not yet supported by FCL wallets (e.g. mobile, game console)."}),"\n",(0,a.jsx)(t.li,{children:"You have business or product needs that necessitate a custodial approach (e.g. fraud protection, users who want a custodial option)."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If you do need to build your own wallet, we recommend using the ",(0,a.jsx)(t.a,{href:"https://github.com/flow-hydraulics/flow-wallet-api",children:"open-source Wallet API"}),", a service you can deploy as part of your infrastructure to manage blockchain accounts and keys."]}),"\n",(0,a.jsx)(t.h3,{id:"recommendation",children:"Recommendation"}),"\n",(0,a.jsx)(t.p,{children:"Unless you have a specific use case that requires you to manage your users\u2019 private keys, we recommend building an FCL-powered dapp that connects with existing wallet providers:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://blocto.portto.io/en/",children:"Blocto"})," is a web, iOS and Android wallet that powers FCL-enabled applications like ",(0,a.jsx)(t.a,{href:"https://vault.cnn.com/",children:"Vault by CNN"}),", ",(0,a.jsx)(t.a,{href:"https://motogp-ignition.com/",children:"MotoGP Ignition"})," and ",(0,a.jsx)(t.a,{href:"https://www.versus-flow.art/",children:"Versus"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://www.meetdapper.com/",children:"Dapper Wallet"})," (used by ",(0,a.jsx)(t.a,{href:"https://nbatopshot.com/",children:"NBA Top Shot"}),") is an FCL-compatible wallet that will soon become available to more Flow developers."]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);