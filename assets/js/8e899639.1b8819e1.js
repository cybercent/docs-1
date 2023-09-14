"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29275],{28351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});n(67294);var o=n(85893),s=n(11151);const r={title:"Quorum Certificate and Distributed Key Generation",sidebar_label:"QC and DKG",description:"How the Flow protocol manages the Epoch Setup Phase"},i=void 0,c={unversionedId:"building-on-flow/run-and-secure/staking/qc-dkg",id:"building-on-flow/run-and-secure/staking/qc-dkg",title:"Quorum Certificate and Distributed Key Generation",description:"How the Flow protocol manages the Epoch Setup Phase",source:"@site/docs/building-on-flow/run-and-secure/staking/09-qc-dkg.mdx",sourceDirName:"building-on-flow/run-and-secure/staking",slug:"/building-on-flow/run-and-secure/staking/qc-dkg",permalink:"/docs/next/building-on-flow/run-and-secure/staking/qc-dkg",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/run-and-secure/staking/09-qc-dkg.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1694724388,formattedLastUpdatedAt:"Sep 14, 2023",sidebarPosition:9,frontMatter:{title:"Quorum Certificate and Distributed Key Generation",sidebar_label:"QC and DKG",description:"How the Flow protocol manages the Epoch Setup Phase"},sidebar:"buildingOnFlow",previous:{title:"How to Query Staking rewards",permalink:"/docs/next/building-on-flow/run-and-secure/staking/staking-rewards"},next:{title:"QC/DKG Scripts and Events",permalink:"/docs/next/building-on-flow/run-and-secure/staking/qc-dkg-scripts-events"}},a={},d=[{value:"<code>FlowClusterQC</code> Transactions",id:"flowclusterqc-transactions",level:2},{value:"Create QC Voter Object",id:"create-qc-voter-object",level:3},{value:"Submit Vote",id:"submit-vote",level:3},{value:"<code>FlowDKG</code> Transactions",id:"flowdkg-transactions",level:2},{value:"Create DKG Participant Object",id:"create-dkg-participant-object",level:3},{value:"Post Whiteboard Message",id:"post-whiteboard-message",level:3},{value:"Send Final Submission",id:"send-final-submission",level:3}];function h(e){const t=Object.assign({p:"p",h1:"h1",strong:"strong",code:"code",a:"a",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components),{Callout:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"If you haven't read the Intro to Flow Staking document and the Epoch protocol document,\nplease read that first. Those documents provide an overview of epochs on Flow for\nall users and are necessary prerequisites to this document."})}),"\n",(0,o.jsx)(n,{type:"warning",children:(0,o.jsx)(t.p,{children:"This document assumes you have some technical knowledge about the Flow\nblockchain and programming environment."})}),"\n",(0,o.jsx)(t.h1,{id:"epoch-setup-phase",children:"Epoch Setup Phase"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Purpose:"})," During the epoch setup phase, all nodes participating in the upcoming epoch\nmust perform setup tasks in preparation for the upcoming epoch, including\nthe Collector Cluster Quorum Certificate Generation and Consensus Committe Distributed Key Generation."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Duration:"})," The epoch setup phase begins right after the ",(0,o.jsx)(t.code,{children:"EpochSetup"})," service event is emitted.\nIt ends with the block where ",(0,o.jsx)(t.code,{children:"EpochCommit"})," service emitted."]}),"\n",(0,o.jsx)(t.h1,{id:"machine-accounts",children:"Machine Accounts"}),"\n",(0,o.jsx)(t.p,{children:"The processes described in this document are fully automated."}),"\n",(0,o.jsx)(t.p,{children:"They are expected to be performed entirely by the node software with no manual\ninteraction required by the node operator after the node has been set up and registered."}),"\n",(0,o.jsxs)(t.p,{children:['To facilitate this, we recommend that node operators use a secondary "machine account"\nthat only stores the ',(0,o.jsx)(t.code,{children:"FlowClusterQC.Voter"})," or ",(0,o.jsx)(t.code,{children:"FlowDKG.Participant"})," resource objects\nin addition to FLOW to pay for transaction fees. You can connect your node to this account\nto participate in the Epoch Setup Phase without having to do the actions manually."]}),"\n",(0,o.jsxs)(t.p,{children:["If you are using the ",(0,o.jsx)(t.a,{href:"./staking-collection",children:"Staking Collection"})," for your node,\nthis functionality is built-in. When you register a node with the staking collection,\nyou also have to provide a public key or keys for your machine account for the node."]}),"\n",(0,o.jsx)(t.p,{children:"If you have a node without a machine account (if you were operating a node from the time\nbefore epochs and staking collection were enabled, for example) the staking collection\nalso provides a method to create a machine account for an existing node."}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/staking-collection#machine-account-support",children:"Staking Collection Docs"}),"\nfor more information."]}),"\n",(0,o.jsx)(t.h1,{id:"collector-cluster-quorum-certificate-generation-protocol",children:"Collector Cluster Quorum Certificate Generation Protocol"}),"\n",(0,o.jsxs)(t.p,{children:["The collector nodes are organized into clusters and must bootstrap\nthe Hotstuff consensus algorithm for each cluster. To do this,\nthey generate the root block for their respective clusters\nand submit a vote for the root block to a specialized smart contract, ",(0,o.jsx)(t.code,{children:"FlowClusterQC"}),".\nIf 2/3 of the collectors in a cluster have voted with the same unique vote,\nthen the cluster is considered complete.\nOnce all clusters are complete, the QC is complete."]}),"\n",(0,o.jsxs)(t.h2,{id:"flowclusterqc-transactions",children:[(0,o.jsx)(t.code,{children:"FlowClusterQC"})," Transactions"]}),"\n",(0,o.jsx)(t.h3,{id:"create-qc-voter-object",children:"Create QC Voter Object"}),"\n",(0,o.jsxs)(t.p,{children:["A node uses the ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowEpoch.cdc#L732",children:(0,o.jsx)(t.code,{children:"getClusterQCVoter()"})}),"\nfunction in the ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," contract to create their Voter object and needs to provide\na reference to their ",(0,o.jsx)(t.code,{children:"FlowIDTableStaking.NodeStaker"})," object to prove they are the node owner."]}),"\n",(0,o.jsxs)(t.p,{children:["When registering a node with the staking collection, this process is handled by\n",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/staking-collection#register-a-new-staked-node",children:"the transaction to register."}),"\nIt also creates a machine account for the QC object."]}),"\n",(0,o.jsxs)(t.p,{children:["If a user already has a registered node with the staking collection, but hasn't created their QC Voter object yet,\nthey can use the ",(0,o.jsxs)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/staking-collection#create-a-machine-account-for-an-existing-node",children:[(0,o.jsx)(t.code,{children:"create_machine_account.cdc"})," transaction."]})]}),"\n",(0,o.jsxs)(t.p,{children:["If a user is not using the staking collection, they can use the ",(0,o.jsx)(t.strong,{children:"Create QC Voter"})," (",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/core-contracts/epoch-contract-reference#quorum-certificate-transactions-and-scripts",children:"QC.01"}),")\ntransaction. This will only store the QC Voter object in the account that stores the ",(0,o.jsx)(t.code,{children:"NodeStaker"})," object.\nIt does not create a machine account or store it elsewhere, so it is not recommended to use. We encourage to use the staking collection instead."]}),"\n",(0,o.jsx)(t.h3,{id:"submit-vote",children:"Submit Vote"}),"\n",(0,o.jsxs)(t.p,{children:["During the Epoch Setup Phase, the node software should submit the votes for the QC generation\nautomatically using the ",(0,o.jsx)(t.strong,{children:"Submit QC Vote"})," (",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/core-contracts/epoch-contract-reference#quorum-certificate-transactions-and-scripts",children:"QC.02"}),")\ntransaction with the following arguments."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Argument"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"voteSignature"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"The signed message (signed with the node's staking key)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"voteMessage"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"The raw message itself."})]})]})]}),"\n",(0,o.jsx)(t.h1,{id:"consensus-committee-distributed-key-generation-protocol-dkg",children:"Consensus Committee Distributed Key Generation Protocol (DKG)"}),"\n",(0,o.jsxs)(t.p,{children:["The Random Beacon Committee for the next Epoch (currently all consensus nodes)\nwill run the DKG through a specialized smart contract, ",(0,o.jsx)(t.code,{children:"FlowDKG"}),'.\nTo do this, they post a series of messages to a public "whiteboard" to\ncollectively generate a shared key array. When each node has enough information\nto generate their array of keys, they send the generated array to the smart contract\nas their final submission.\nIf ',(0,o.jsx)(t.code,{children:"(# of consensus nodes-1)/2"})," consensus nodes submit the same key array,\nthe DKG is considered to be complete."]}),"\n",(0,o.jsxs)(t.h2,{id:"flowdkg-transactions",children:[(0,o.jsx)(t.code,{children:"FlowDKG"})," Transactions"]}),"\n",(0,o.jsx)(t.h3,{id:"create-dkg-participant-object",children:"Create DKG Participant Object"}),"\n",(0,o.jsxs)(t.p,{children:["A node uses the ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/epochs/FlowEpoch.cdc#L746",children:(0,o.jsx)(t.code,{children:"getDKGParticipant()"})}),"\nfunction in the ",(0,o.jsx)(t.code,{children:"FlowEpoch"})," contract to create their Voter object and needs to provide\na reference to their ",(0,o.jsx)(t.code,{children:"FlowIDTableStaking.NodeStaker"})," object to prove they are the node owner."]}),"\n",(0,o.jsxs)(t.p,{children:["When registering a node with the staking collection, this process is handled by\n",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/staking-collection#register-a-new-staked-node",children:"the transaction to register."}),"\nIt also creates a machine account for the DKG Object."]}),"\n",(0,o.jsxs)(t.p,{children:["If a user already has a registered node with the staking collection, but hasn't created their DKG Participant object yet,\nthey can use the ",(0,o.jsxs)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/staking-collection#create-a-machine-account-for-an-existing-node",children:[(0,o.jsx)(t.code,{children:"create_machine_account.cdc"})," transaction."]})]}),"\n",(0,o.jsxs)(t.p,{children:["If a user is not using the staking collection, they can use the ",(0,o.jsx)(t.strong,{children:"Create DKG Participant"})," (",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/core-contracts/epoch-contract-reference#dkg-transactions-and-scripts",children:"DKG.01"}),")\ntransaction. This will only store the DKG Participant object in the account that stores the ",(0,o.jsx)(t.code,{children:"NodeStaker"})," object.\nIt does not create a machine account or store it elsewhere, so it is not recommended to use.\nThe staking collection is the recommended method."]}),"\n",(0,o.jsx)(t.h3,{id:"post-whiteboard-message",children:"Post Whiteboard Message"}),"\n",(0,o.jsxs)(t.p,{children:["During the Epoch Setup Phase, the node software should post whiteboard messages to the DKG\nautomatically using the ",(0,o.jsx)(t.strong,{children:"Post Whiteboard Message"})," (",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/core-contracts/epoch-contract-reference#dkg-transactions-and-scripts",children:"DKG.02"}),")\ntransaction with the following arguments."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Argument"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"content"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"The content of the whiteboard message"})]})})]}),"\n",(0,o.jsx)(t.h3,{id:"send-final-submission",children:"Send Final Submission"}),"\n",(0,o.jsxs)(t.p,{children:["During the Epoch Setup Phase, the node software should send its final submission for the DKG\nautomatically using the ",(0,o.jsx)(t.strong,{children:"Send Final Submission"})," (",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/core-contracts/epoch-contract-reference#dkg-transactions-and-scripts",children:"DKG.03"}),")\ntransaction with the following arguments."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Argument"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"submission"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"[String?]"})}),(0,o.jsx)(t.td,{children:"The final key vector submission for the DKG."})]})})]}),"\n",(0,o.jsx)(t.h1,{id:"monitor-events-and-query-state-from-the-qc-and-dkg-contracts",children:"Monitor Events and Query State from the QC and DKG Contracts"}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"./qc-dkg-scripts-events",children:"QC and DKG events and scripts document"})," for information\nabout the events that can be emitted by these contracts and scripts you can use to query information."]})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}}}]);