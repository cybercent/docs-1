"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[54543],{59695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>h});n(67294);var s=n(85893),r=n(11151);const d={title:"Basic Staking with FLOW",sidebar_title:"Basic Staking Guide (Deprecated)"},o=void 0,a={unversionedId:"concepts/staking/staking-guide",id:"concepts/staking/staking-guide",title:"Basic Staking with FLOW",description:"This document outlines the steps a token holder can take to stake and manage",source:"@site/docs/concepts/staking/15-staking-guide.mdx",sourceDirName:"concepts/staking",slug:"/concepts/staking/staking-guide",permalink:"/docs/next/concepts/staking/staking-guide",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/staking/15-staking-guide.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1688616770,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:15,frontMatter:{title:"Basic Staking with FLOW",sidebar_title:"Basic Staking Guide (Deprecated)"},sidebar:"docsSidebar",previous:{title:"Manage a Staking Collection",permalink:"/docs/next/concepts/staking/staking-collection"},next:{title:"Token Standards",permalink:"/docs/next/concepts/token-standards/"}},i={},h=[{value:"Setup",id:"setup",level:2},{value:"Register a New Staked Node",id:"register-a-new-staked-node",level:3},{value:"Stake Tokens",id:"stake-tokens",level:2},{value:"Re-stake Unstaked Tokens",id:"re-stake-unstaked-tokens",level:2},{value:"Re-stake Rewarded Tokens",id:"re-stake-rewarded-tokens",level:2},{value:"Request Unstake Tokens",id:"request-unstake-tokens",level:2},{value:"Unstake All Tokens",id:"unstake-all-tokens",level:2},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens",level:2},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens",level:2},{value:"Stake Multiple Nodes from the Same Account",id:"stake-multiple-nodes-from-the-same-account",level:2},{value:"Setup",id:"setup-1",level:2},{value:"Register as a Delegator",id:"register-as-a-delegator",level:2},{value:"Delegate New Tokens",id:"delegate-new-tokens",level:2},{value:"Re-delegate Unstaked Tokens",id:"re-delegate-unstaked-tokens",level:2},{value:"Re-delegate Rewarded Tokens",id:"re-delegate-rewarded-tokens",level:2},{value:"Unstake Delegated Tokens",id:"unstake-delegated-tokens",level:2},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens-1",level:2},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens-1",level:2},{value:"Delegate to Multiple Nodes from the Same Account",id:"delegate-to-multiple-nodes-from-the-same-account",level:2}];function c(e){const t=Object.assign({p:"p",code:"code",strong:"strong",h1:"h1",h2:"h2",h3:"h3",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr",em:"em"},(0,r.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This document outlines the steps a token holder can take to stake and manage\na Flow node with FLOW using only the types defined in the ",(0,s.jsx)(t.code,{children:"FlowIDTableStaking"})," contract.\nIt only supports having one node or delegator object per account and is not supported by ledger\nand will likely not be supported by other wallets, so it is recommended to use the staking collection\ninstead."]}),"\n",(0,s.jsx)(n,{type:"warning",children:(0,s.jsxs)(t.p,{children:["This guide covers staking with ",(0,s.jsx)(t.strong,{children:"FLOW tokens"}),"."]})}),"\n",(0,s.jsx)(t.h1,{id:"staking",children:"Staking"}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(t.h3,{id:"register-a-new-staked-node",children:"Register a New Staked Node"}),"\n",(0,s.jsxs)(t.p,{children:["To register as a node operator with FLOW, the token holder can use the ",(0,s.jsx)(t.strong,{children:"Register Node"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.11"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsxs)(t.td,{children:["The ID of the new node. It must be a 32 byte ",(0,s.jsx)(t.code,{children:"String"}),". The operator is free to choose this value, but it must be unique across all nodes. A recommended process to generate this is to hash the staking public key."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"role"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UInt8"})}),(0,s.jsx)(t.td,{children:"The role of the new node. (1: collection, 2: consensus, 3: execution, 4: verification, 5: access)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"networkingAddress"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The IP address of the new node. (Length must be less than 255 bytes (510 Hex characters))"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"networkingKey"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsxs)(t.td,{children:["The networking public key as a 64 byte hex-encoded ",(0,s.jsx)(t.code,{children:"String"})," (128 hex characters)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"stakingKey"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsxs)(t.td,{children:["The staking public key as a 96 byte hex-encoded ",(0,s.jsx)(t.code,{children:"String"})," (192 hex characters)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to stake."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"This transaction registers the account as a node operator with the specified node information\nand creates a public link to query the nodes ID from the account address."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Once the token holder has registered their node,\ntheir tokens and node information are committed to the central staking contract for the next epoch."}),"\n",(0,s.jsx)(t.p,{children:"At this point, the token holder now has access to various staking operations that they can perform,\nassuming they have the correct number of tokens to perform the action."}),"\n",(0,s.jsx)(t.h2,{id:"stake-tokens",children:"Stake Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can stake additional tokens at any time."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Note: this transaction stakes additional tokens to the same node that was registered in the setup phase."})}),"\n",(0,s.jsxs)(t.p,{children:["To stake tokens, the token holder can use the ",(0,s.jsx)(t.strong,{children:"Stake FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.12"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to stake."})]})})]}),"\n",(0,s.jsx)(t.p,{children:"This transaction commits tokens to stake from the token holder's account."}),"\n",(0,s.jsx)(t.h2,{id:"re-stake-unstaked-tokens",children:"Re-stake Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After tokens become unstaked, the token holder can choose to re-stake the unstaked tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To staked unstaked tokens, the token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-stake Unstaked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.13"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to stake."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"re-stake-rewarded-tokens",children:"Re-stake Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from staking, the token holder can choose to re-stake the rewarded tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To stake rewarded tokens, the token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-stake Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.14"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to stake."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"request-unstake-tokens",children:"Request Unstake Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can submit a request to unstake some of their tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."}),"\n",(0,s.jsxs)(t.p,{children:["To request to unstake staked tokens, the token holder can use\nthe ",(0,s.jsx)(t.strong,{children:"Request Unstaking"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.15"}),") transaction."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to request to un-stake."})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Note: this transaction will not succeed if the node operator has delegators and the request\nwould put the node operator below the minimum required tokens staked for their node type.\nUse the ",(0,s.jsx)(t.code,{children:"Unstake All"})," transaction instead, which will also unstake all delegators."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Note: unstaked tokens will be held by the central staking contract until the end of the following epoch.\nOnce the tokens are released (unstaked), they can be claimed via the\n",(0,s.jsx)(t.a,{href:"#withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"})," action below."]})}),"\n",(0,s.jsx)(t.h2,{id:"unstake-all-tokens",children:"Unstake All Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can submit a request to unstake all their tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."}),"\n",(0,s.jsxs)(t.p,{children:["To unstake all staked tokens, the token holder can use\nthe ",(0,s.jsx)(t.strong,{children:"Unstake All FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.16"}),") transaction."]}),"\n",(0,s.jsx)(t.p,{children:"This transaction requires no arguments."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Warning: this will unstake all of the user's staked tokens and unstake all of the tokens\nfrom users that are delegating FLOW to the node."})}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After tokens become unstaked, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw unstaked tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Withdraw Unstaked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.17"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the unstaked tokens back into the ",(0,s.jsx)(t.code,{children:"FlowToken.Vault"})," owned by the token holder."]}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-rewarded-tokens",children:"Withdraw Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from staking, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw rewarded tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Withdraw Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#staking",children:"SC.18"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the rewarded tokens back into the ",(0,s.jsx)(t.code,{children:"FlowToken.Vault"})," owned by the token holder."]}),"\n",(0,s.jsx)(t.h2,{id:"stake-multiple-nodes-from-the-same-account",children:"Stake Multiple Nodes from the Same Account"}),"\n",(0,s.jsx)(t.p,{children:"Currently, the default staking transactions can only be used as they are to stake one node per account."}),"\n",(0,s.jsx)(t.p,{children:"If a token holder wants to create a second staking relationship using the transactions as is, they must create a new account\nand transfer their tokens to the new account."}),"\n",(0,s.jsx)(t.p,{children:"It is possible to have multiple nodes per account by storing the node objects at different storage paths,\nbut this would require small changes to these transactions to use the new storage paths."}),"\n",(0,s.jsx)(t.h1,{id:"delegating",children:"Delegating"}),"\n",(0,s.jsx)(t.h2,{id:"setup-1",children:"Setup"}),"\n",(0,s.jsx)(t.h2,{id:"register-as-a-delegator",children:"Register as a Delegator"}),"\n",(0,s.jsxs)(t.p,{children:["To register as a delegator, the token holder can use the ",(0,s.jsx)(t.strong,{children:"Register Delegator"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#delegating",children:"SC.19"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The ID of the node to delegate to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to delegate."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"This transaction registers the account as a delegator to the node ID they specified."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"delegate-new-tokens",children:"Delegate New Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can delegate additional tokens after registering as a delegator."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Note: this transaction delegates additional tokens to the same node that was registered in the setup phase."})}),"\n",(0,s.jsxs)(t.p,{children:["To delegate new tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Delegate New FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#delegating",children:"SC.20"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to delegate."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"re-delegate-unstaked-tokens",children:"Re-delegate Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After delegated tokens become unstaked, the token holder can choose to re-delegate the unstaked tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To delegate unstaked tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-delegate Unstaked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#delegating",children:"SC.21"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to delegate."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"re-delegate-rewarded-tokens",children:"Re-delegate Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from delegation, the token holder can choose to re-delegate the rewarded tokens to the same node."}),"\n",(0,s.jsxs)(t.p,{children:["To delegate rewarded tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Re-delegate Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#delegating",children:"SC.22"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to delegate."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"unstake-delegated-tokens",children:"Unstake Delegated Tokens"}),"\n",(0,s.jsx)(t.p,{children:"The token holder can submit a request to unstake their delegated tokens at any time.\nIf the tokens aren't staked yet, they will be uncommitted and available to withdraw."}),"\n",(0,s.jsxs)(t.p,{children:["To unstake delegated tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Unstake Delegated FOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#delegating",children:"SC.23"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of FLOW tokens to unstake."})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Note: unstaked delegated tokens will be held by the central staking contract for a period of time\n(the rest of the current epoch plus all of the next epoch) before they are\nreleased to the token holder. Once the tokens are released (unstaked),\nthey can be claimed via the ",(0,s.jsx)(t.a,{href:"#withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"})," action below."]})}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-unstaked-tokens-1",children:"Withdraw Unstaked Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After delegated tokens become unstaked, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw unstaked tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Withdraw Unstaked FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#delegating",children:"SC.24"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of unstaked FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the unstaked tokens back into the ",(0,s.jsx)(t.code,{children:"FlowToken.Vault"})," owned by the token holder."]}),"\n",(0,s.jsx)(t.h2,{id:"withdraw-rewarded-tokens-1",children:"Withdraw Rewarded Tokens"}),"\n",(0,s.jsx)(t.p,{children:"After earning rewards from delegation, the token holder can withdraw them from the central staking contract."}),"\n",(0,s.jsxs)(t.p,{children:["To withdraw rewarded tokens,\nthe token holder can use the ",(0,s.jsx)(t.strong,{children:"Withdraw Rewarded FLOW"})," (",(0,s.jsx)(t.a,{href:"/docs/next/concepts/core-contracts/staking-contract-reference#delegating",children:"SC.25"}),")\ntransaction with the following arguments:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"amount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UFix64"})}),(0,s.jsx)(t.td,{children:"The number of rewarded FLOW tokens to withdraw."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["This transaction moves the rewarded tokens back into the ",(0,s.jsx)(t.code,{children:"FlowToken.Vault"})," owned by the token holder."]}),"\n",(0,s.jsx)(t.h2,{id:"delegate-to-multiple-nodes-from-the-same-account",children:"Delegate to Multiple Nodes from the Same Account"}),"\n",(0,s.jsx)(t.p,{children:"Currently, the default delegating transactions can only be used as they are to stake one node per account."}),"\n",(0,s.jsx)(t.p,{children:"If a token holder wants to create a second delegating relationship using the transactions as is, they must create a new account\nand transfer their tokens to the new account."}),"\n",(0,s.jsx)(t.p,{children:"It is possible to have multiple delegator objects per account\nby storing the node objects at different storage paths,\nbut this would require small changes to these transactions to use the new storage paths."})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);