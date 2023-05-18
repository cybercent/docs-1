"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6753],{44681:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});s(67294);var n=s(85893),a=s(11151);const i={title:"NFT Drop Strategies",sidebar_title:"NFT Drop Strategies"},r=void 0,o={unversionedId:"tutorials/NFT-drop-styles",id:"tutorials/NFT-drop-styles",title:"NFT Drop Strategies",description:"Exploring Different Strategies for NFT Drops",source:"@site/docs/tutorials/NFT-drop-styles.md",sourceDirName:"tutorials",slug:"/tutorials/NFT-drop-styles",permalink:"/docs/tutorials/NFT-drop-styles",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/NFT-drop-styles.md",tags:[],version:"current",lastUpdatedBy:"j pimmel",lastUpdatedAt:1684425504,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"NFT Drop Strategies",sidebar_title:"NFT Drop Strategies"},sidebar:"tutorialSidebar",previous:{title:"Dapp Architectures on the Flow Blockchain",permalink:"/docs/tutorials/DappArchitectures"},next:{title:"Smart Contract Testing Guidelines",permalink:"/docs/tutorials/contract-testing"}},l={},d=[{value:"Exploring Different Strategies for NFT Drops",id:"exploring-different-strategies-for-nft-drops",level:2},{value:"On-chain Sale of Pre-Minted NFTs",id:"on-chain-sale-of-pre-minted-nfts",level:2},{value:"Off-chain Sale of Pre-Minted NFTs",id:"off-chain-sale-of-pre-minted-nfts",level:2},{value:"Pre-sale of NFTs With Deferred Delivery",id:"pre-sale-of-nfts-with-deferred-delivery",level:2},{value:"On-chain On-demand Mint and Sale of NFTs",id:"on-chain-on-demand-mint-and-sale-of-nfts",level:2},{value:"Off-chain On-demand Mint and Sale of NFTs",id:"off-chain-on-demand-mint-and-sale-of-nfts",level:2},{value:"On-chain Sale of NFTs Gated by Vouchers",id:"on-chain-sale-of-nfts-gated-by-vouchers",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",img:"img"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"exploring-different-strategies-for-nft-drops",children:"Exploring Different Strategies for NFT Drops"}),"\n",(0,n.jsx)(t.p,{children:"This is a brief overview of different strategies for releasing NFTs.\nEach strategy focuses on a few key aspects of NFT drops:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Where are the NFTs sold?"}),"\n",(0,n.jsx)(t.li,{children:"When are the NFTs minted?"}),"\n",(0,n.jsx)(t.li,{children:"Who is responsible for payment processing?"}),"\n",(0,n.jsx)(t.li,{children:"When do buyers receive their NFTs?"}),"\n",(0,n.jsx)(t.li,{children:"How much do buyers trust your project?"}),"\n",(0,n.jsx)(t.li,{children:"How much do you trust NFT buyers?"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"on-chain-sale-of-pre-minted-nfts",children:"On-chain Sale of Pre-Minted NFTs"}),"\n",(0,n.jsx)(t.p,{children:"With this strategy, the NFTs are pre-minted, so they are all minted before being sold.\nThen they are bought and sold in an on-chain storefront, this means that completed transactions are reflected on the blockchain."}),"\n",(0,n.jsx)(t.p,{children:"This allows a dapp to grow without dealing with additional payment rails because the blockchain handles the payment.\nNFT buyers like this strategy because they don't have to trust the dapp to complete a transaction successfully, all they need is their wallet.\nThis strategy doesn't need a backend, which lowers the costs and complexity for developers.\nHowever, while the lack of Know Your Customer (KYC) makes this strategy frictionless for buyers and developers, it also leaves the dapp susceptible to bot attacks because the developer can't verify that the customers are real people."}),"\n",(0,n.jsxs)(t.p,{children:["Real-world examples of dapps using this strategy include: ",(0,n.jsx)(t.a,{href:"https://viv3.com/",children:"Viv3"}),", ",(0,n.jsx)(t.a,{href:"https://bay.blocto.app/",children:"BloctoBay"}),", ",(0,n.jsx)(t.a,{href:"https://chainmonsters.com/",children:"Chainmonsters"}),", and ",(0,n.jsx)(t.a,{href:"https://nbatopshot.com/",children:"NBA Topshot"}),".\n",(0,n.jsx)(t.img,{src:s(55379).Z+"",loading:"lazy",alt:"On-chain pre-minted NFT diagram",width:"694",height:"532"})]}),"\n",(0,n.jsx)(t.h2,{id:"off-chain-sale-of-pre-minted-nfts",children:"Off-chain Sale of Pre-Minted NFTs"}),"\n",(0,n.jsx)(t.p,{children:"Pre-minting the NFTs and selling them through the dapp\u2019s website is a similar alternative strategy.\nThis allows the dapp developers to have greater control over the NFT sale process, allowing developers to prevent bots from accessing the storefront."}),"\n",(0,n.jsx)(t.p,{children:"Another benefit to this strategy is that developers can implement traditional payment rails, like credit cards, into the storefront in addition to crypto payments.\nThis benefits both NFT sellers and buyers because they can use whichever payment method is most convenient, which opens up an NFT storefront to a broader buying audience."}),"\n",(0,n.jsx)(t.p,{children:"This strategy requires NFT buyers to trust the dapp more, especially with crypto payments, because they are irreversible.\nIntegrating payment processors for traditional payment rails may also be a challenge in some markets, leading to very different user experiences for NFT buyers.\nAs a storefront owner, you also risk chargeback issues when you implement traditional payment rails."}),"\n",(0,n.jsxs)(t.p,{children:["Real-world examples include ",(0,n.jsx)(t.a,{href:"https://vault.cnn.com/",children:"CNN Vault"})," and ",(0,n.jsx)(t.a,{href:"https://app.rcrdshp.com/",children:"RCRDSHP"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(36394).Z+"",loading:"lazy",alt:"Off-chain pre-minted NFT diagram",width:"617",height:"451"})}),"\n",(0,n.jsx)(t.h2,{id:"pre-sale-of-nfts-with-deferred-delivery",children:"Pre-sale of NFTs With Deferred Delivery"}),"\n",(0,n.jsx)(t.p,{children:"Pre-selling claims to NFTs and agreeing to deliver them at a later date is also a popular strategy.\nThis is a great way to gauge interest in your project before investing in content or technology.\nBuyers receive their NFTs when your dapp is built, and you're ready to deliver content.\nYou can implement smart contracts for NFT pre-sales, and you can handle the transaction either on-chain or off-chain."}),"\n",(0,n.jsx)(t.p,{children:"For this strategy to succeed, NFT buyers need to have a lot of trust in your project.\nBuyers can't choose which NFT they buy because it doesn't exist yet, and this strategy doesn't leave much room for secondary markets."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(29357).Z+"",loading:"lazy",alt:"Pre-sale NFT deferred delivery diagram",width:"752",height:"610"})}),"\n",(0,n.jsx)(t.h2,{id:"on-chain-on-demand-mint-and-sale-of-nfts",children:"On-chain On-demand Mint and Sale of NFTs"}),"\n",(0,n.jsx)(t.p,{children:"With this strategy, NFTs are minted and sold when a buyer wants to buy them.\nThis strategy is less common than others because building it can be complex.\nTo accomplish this you need to have custom NFT sale contracts for each buyer, and you need to generate unique content for each user.\nGenerating purely random and unique content is challenging, and managing content drops is also a difficult problem to solve.\nAlso, because transactions are on-chain, your dapp will be susceptible to bot attacks."}),"\n",(0,n.jsx)(t.p,{children:"But, there are some very unique benefits to this strategy.\nThe scarcity of the NFTs is predictable, and your dapp will never have unsold inventory.\nThis strategy also makes your project as decentralized as possible, because you don't need to maintain a centralized inventory or payment process."}),"\n",(0,n.jsxs)(t.p,{children:["Real-world examples include: ",(0,n.jsx)(t.a,{href:"https://bitku.art",children:"Bitku"}),", AMM driven NFT minting, and ",(0,n.jsx)(t.a,{href:"https://www.flowverse.co/applications/cryptopiggos",children:"CryptoPiggos"}),"\n",(0,n.jsx)(t.img,{src:s(99319).Z+"",loading:"lazy",alt:"On-chain on-demand NFT diagram",width:"691",height:"537"})]}),"\n",(0,n.jsx)(t.h2,{id:"off-chain-on-demand-mint-and-sale-of-nfts",children:"Off-chain On-demand Mint and Sale of NFTs"}),"\n",(0,n.jsx)(t.p,{children:"This strategy also uses on-demand minting, however, transactions are made off-chain so that developers can have greater control over the NFT sale process.\nWith on-demand minting, a dapp using this strategy will never have unsold inventory, and it benefits from the ability to implement traditional payment rails, like credit cards.\nDevelopers can also use KYC to prevent bots or other unauthorized buyers, from buying NFTs."}),"\n",(0,n.jsx)(t.p,{children:"While this strategy has some very unique benefits, it is complex to set up, which leads to unique challenges.\nThe combination of off-chain transactions and on-demand minting means that this strategy needs more blockchain transactions to complete the NFT purchase flow.\nAlso, like other off-chain strategies, NFT buyers need to trust the dapp, and payment processors may be challenging to implement in some markets."}),"\n",(0,n.jsxs)(t.p,{children:["A real-world example of this strategy is ",(0,n.jsx)(t.a,{href:"https://dooverse.io/",children:"Dooverse"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(35008).Z+"",loading:"lazy",alt:"Off-chain on-demand NFT diagram",width:"584",height:"451"})}),"\n",(0,n.jsx)(t.h2,{id:"on-chain-sale-of-nfts-gated-by-vouchers",children:"On-chain Sale of NFTs Gated by Vouchers"}),"\n",(0,n.jsx)(t.p,{children:"The final strategy we're looking at allows NFT buyers to register on your website for vouchers that they can exchange for NFTs.\nThe vouchers act as authorization for a buyer, allowing your website to control who is allowed to buy your NFTs, while still gaining the benefits of on-chain transactions.\nThis is a great way to implement on-chain transactions while preventing bots and unauthorized buyers from accessing your NFTs."}),"\n",(0,n.jsxs)(t.p,{children:["However, this 2-step process may be too much friction for some NFT buyers, which may limit your NFT sales.\nAdditionally, the voucher system is imperfect, and there may be an unauthorized secondary market for your project's vouchers.\nReal-world examples of this strategy include ",(0,n.jsx)(t.a,{href:"https://www.jambb.com/",children:"JAMBB"})," and ",(0,n.jsx)(t.a,{href:"https://www.onflow.org/post/alpha-innovation-series-round-labs-on-cadence-and-building-on-flow",children:"RoundLabs/Faze"}),".\n",(0,n.jsx)(t.img,{src:s(57354).Z+"",loading:"lazy",alt:"On-chain NFT with vouchers diagram",width:"841",height:"697"})]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(t.p,{children:["Choosing an NFT drop strategy can be challenging.\nEach strategy comes with its own benefits and challenges, and it's important to weigh which factors are most important for your project.\nFor more examples of real-world NFT projects using a variety of different strategies, have a look at ",(0,n.jsx)(t.a,{href:"https://www.flowverse.co/",children:"Flowverse"})]})]})}const c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},55379:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/image1-b4ddd4fc4cd63cf3fb4d98ee58f850bc.png"},36394:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/image2-8a9995fdfa7b82012538ea8f0246e909.png"},29357:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/image3-97b24c9a819fac3cbc98fb358ea5728b.png"},99319:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/image4-937a26d3ec3131d37d5dfddcf7686347.png"},35008:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/image5-bac91a6765eaeab7ea05c7cff80b7a56.png"},57354:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/image6-3868864697fa6bdc2eea29bb6a546f8b.png"}}]);