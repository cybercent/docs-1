"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[76854],{32747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});t(67294);var o=t(85893),a=t(11151);const s={title:"Mainnet Deployment Guidelines",sidebar_label:"Mainnet Deployment",description:"Guidelines for deploying your project's contracts on Flow Mainnet",sidebar_position:1,sidebar_custom_props:{icon:"\ud83e\udd47"}},i=void 0,r={unversionedId:"guides/deploying/mainnet-deployment",id:"version-stable/guides/deploying/mainnet-deployment",title:"Mainnet Deployment Guidelines",description:"Guidelines for deploying your project's contracts on Flow Mainnet",source:"@site/versioned_docs/version-stable/guides/deploying/mainnet-deployment.mdx",sourceDirName:"guides/deploying",slug:"/guides/deploying/mainnet-deployment",permalink:"/docs/guides/deploying/mainnet-deployment",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/deploying/mainnet-deployment.mdx",tags:[],version:"stable",lastUpdatedBy:"Alex",lastUpdatedAt:1694724388,formattedLastUpdatedAt:"Sep 14, 2023",sidebarPosition:1,frontMatter:{title:"Mainnet Deployment Guidelines",sidebar_label:"Mainnet Deployment",description:"Guidelines for deploying your project's contracts on Flow Mainnet",sidebar_position:1,sidebar_custom_props:{icon:"\ud83e\udd47"}},sidebar:"guides",previous:{title:"Deployments",permalink:"/docs/guides/deploying/"},next:{title:"Testnet Deployment",permalink:"/docs/guides/deploying/testnet-deployment"}},c={},d=[{value:"Creating an Account",id:"creating-an-account",level:3},{value:"Create and deploy a mainnet project",id:"create-and-deploy-a-mainnet-project",level:3},{value:"Deploy updated contracts on mainnet",id:"deploy-updated-contracts-on-mainnet",level:3},{value:"Sporks",id:"sporks",level:3}];function l(e){const n=Object.assign({p:"p",h3:"h3",strong:"strong",a:"a",ul:"ul",li:"li",code:"code"},(0,a.ah)(),e.components),{Callout:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In order to deploy your smart contracts to the mainnet, you need to register, fund, and setup a new account."}),"\n",(0,o.jsx)(t,{type:"info",children:(0,o.jsx)(n.p,{children:"This account will be used for production purposes. Make sure you handle keys appropriately. Using a Key Management Service is the best practice."})}),"\n",(0,o.jsx)(n.h3,{id:"creating-an-account",children:"Creating an Account"}),"\n",(0,o.jsxs)(n.p,{children:["There are two simple methods of creating an account on testnet. ",(0,o.jsx)(n.strong,{children:"Interactive"})," and ",(0,o.jsx)(n.strong,{children:"Manual"}),", both use the Flow CLI. On mainnet you will have to fund your newly created account, there is no faucet.\nMake sure to install the Flow CLI. ",(0,o.jsx)(n.a,{href:"../../tools/toolchains/flow-cli/accounts/create-accounts",children:"Flow CLI"})," has a interactive mode for generating keys."]}),"\n",(0,o.jsx)(t,{type:"success",children:(0,o.jsx)(n.p,{children:"Anyone can deploy and update contracts on mainnet. Audits are encouraged but not mandatory to deploying contracts to mainnet. Take every precauction to reduce issues and protect users."})}),"\n",(0,o.jsx)(n.h3,{id:"create-and-deploy-a-mainnet-project",children:"Create and deploy a mainnet project"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Highly encouraged to test on Testnet, have strong smart contract test coverage and follow any additional guidelines set out here: ",(0,o.jsx)(n.a,{href:"./contract-testing",children:"Smart Contract Testing Guidelines"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Follow the Flow CLI instructions to ",(0,o.jsx)(n.a,{href:"../../tools/toolchains/flow-cli",children:"Create a Project"}),". You have the Flow CLI installed and ran ",(0,o.jsx)(n.code,{children:"flow init"})," or ",(0,o.jsx)(n.code,{children:"flow setup"})," in your project folder and generating a ",(0,o.jsx)(n.code,{children:"flow.json"})," file"]}),"\n",(0,o.jsx)(n.li,{children:"Mainnet account: You completed the mainnet account setup, (see above) and have your key pair and mainnet address ready."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/tools/toolchains/flow-cli/deployment/deploy-project-contracts",children:"Deploy your project"}),", notice that your account now has contracts deployed on mainnet."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/tools/toolchains/flow-cli/accounts/account-add-contract",children:"Deploy a contract"})," to mainnet. You can deploy contracts individually using the ",(0,o.jsx)(n.code,{children:"account-add-contract"})," command."]}),"\n"]}),"\n",(0,o.jsx)(t,{type:"info",children:(0,o.jsxs)(n.p,{children:["All your contract deployment addresses are stored in ",(0,o.jsx)(n.code,{children:"flow.json"}),". Mainnet, Testnet and local (emulator) are stored as well."]})}),"\n",(0,o.jsx)(n.h3,{id:"deploy-updated-contracts-on-mainnet",children:"Deploy updated contracts on mainnet"}),"\n",(0,o.jsxs)(n.p,{children:["Contracts can be updated and retain the contract address. You can use the ",(0,o.jsx)(n.a,{href:"/docs/tools/toolchains/flow-cli/accounts/account-update-contract",children:"Flow CLI contract update command"})," to re-deploy an updated version of your contract:"]}),"\n",(0,o.jsx)(t,{type:"warning",children:(0,o.jsxs)(n.p,{children:["If you see ",(0,o.jsx)(n.code,{children:"Error Code: 1103"}),", your new account does not have enough funds to complete the transaction. Make sure you have enough FLOW and your account is set up correctly, check account explorer to verify ",(0,o.jsx)(n.a,{href:"/getting-started",children:"Getting Started"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["Once all your contracts are deployed, you can visit ",(0,o.jsx)(n.a,{href:"https://flow-view-source.com/",children:"flow-view-source"})," or run the ",(0,o.jsx)(n.a,{href:"/docs/tools/toolchains/flow-cli/accounts/get-accounts",children:"Flow CLI get account command"})," to confirm the deployment."]}),"\n",(0,o.jsx)(n.h3,{id:"sporks",children:"Sporks"}),"\n",(0,o.jsxs)(n.p,{children:["Currently, ",(0,o.jsx)(n.strong,{children:"historical event data is not migrated between sporks,"})," so you'll need to design your application with this in mind. We recognize the usefulness of historical event data and plan on adding a means of accessing it in the near future. Past spork transactional data is available, ",(0,o.jsx)(n.a,{href:"../../building-on-flow/run-and-secure/nodes/node-operation/past-sporks",children:"See Previous Spork Access Node Info"})]}),"\n",(0,o.jsxs)(n.p,{children:["More Information on ",(0,o.jsx)(n.a,{href:"../../building-on-flow/run-and-secure/nodes/node-operation/spork",children:"Sporks"})]})]})}const u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);