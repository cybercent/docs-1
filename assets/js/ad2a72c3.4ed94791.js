"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[609],{56564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});a(67294);var n=a(85893),i=a(11151);const s={title:"Introduction to Cadence",sidebar_position:1,sidebar_label:"Introduction"},r=void 0,o={unversionedId:"cadence/intro",id:"cadence/intro",title:"Introduction to Cadence",description:"In a blockchain environment like Flow, programs that are stored on-chain in accounts are commonly referred to as smart contracts.",source:"@site/docs/cadence/intro.md",sourceDirName:"cadence",slug:"/cadence/intro",permalink:"/docs/next/cadence/intro",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/intro.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1685559778,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:1,frontMatter:{title:"Introduction to Cadence",sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Flow User Accounts & Wallets",permalink:"/docs/next/tutorials/user-accounts-and-wallets"},next:{title:"Why Use Cadence?",permalink:"/docs/next/cadence/why"}},c={},l=[{value:"A New Programming Language",id:"a-new-programming-language",level:2},{value:"Cadence&#39;s Programming Language Pillars",id:"cadences-programming-language-pillars",level:2},{value:"Addressing Challenges with Existing Languages",id:"addressing-challenges-with-existing-languages",level:2},{value:"Safety",id:"safety",level:3},{value:"Security",id:"security",level:3},{value:"Clarity and Approachability",id:"clarity-and-approachability",level:3},{value:"Intuiting Ownership with Resources",id:"intuiting-ownership-with-resources",level:2},{value:"An Interpreted Language",id:"an-interpreted-language",level:2},{value:"Getting Started with Cadence",id:"getting-started-with-cadence",level:2}];function d(e){const t=Object.assign({p:"p",h2:"h2",hr:"hr",ul:"ul",li:"li",a:"a",strong:"strong",h3:"h3"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In a blockchain environment like Flow, programs that are stored on-chain in accounts are commonly referred to as smart contracts.\nA smart contract is a program that verifies and executes the performance of a contract without the need for a trusted third party.\nPrograms that run on blockchains are commonly referred to as smart contracts because they mediate important functionality (such as currency)\nwithout having to rely on a central authority (like a bank)."}),"\n",(0,n.jsx)(t.h2,{id:"a-new-programming-language",children:"A New Programming Language"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Cadence is a resource-oriented programming language that introduces new features to smart contract programming\nthat help developers ensure that their code is safe, secure, clear, and approachable. Some of these features are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Type safety and a strong static type system."}),"\n",(0,n.jsx)(t.li,{children:"Resource-oriented programming, a new paradigm that pairs linear types with object capabilities\nto create a secure and declarative model for digital ownership by ensuring that resources (which are used to represent scarce digital assets)\ncan only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted."}),"\n",(0,n.jsx)(t.li,{children:"Built-in pre-conditions and post-conditions for functions and transactions."}),"\n",(0,n.jsx)(t.li,{children:"The utilization of capability-based security, which enforces that access to objects\nis restricted to only the owner of the object and those who have a valid reference to it.\nThis is Cadence's main form of access control."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Cadence\u2019s syntax is inspired by popular modern general-purpose programming languages\nlike ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/swift/",children:"Swift"}),", ",(0,n.jsx)(t.a,{href:"https://kotlinlang.org/",children:"Kotlin"}),", and ",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"}),".\nIts use of resource types maps well to that of ",(0,n.jsx)(t.a,{href:"https://medium.com/coinmonks/overview-of-move-programming-language-a860ffd8f55d",children:"Move"}),",\nthe programming language being developed by the Diem team."]}),"\n",(0,n.jsx)(t.h2,{id:"cadences-programming-language-pillars",children:"Cadence's Programming Language Pillars"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Cadence, a new high-level programming language, observes the following requirements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Safety and Security:"})," Safety is the underlying reliability of any smart contract (i.e., it\u2019s bug-free and performs its function).\nSecurity is the prevention of attacks on the network or smart contracts (i.e., unauthorized actions by malicious actors).\nSafety and security are critical in smart contracts because of the immutable nature of blockchains,\nand because they often deal with high-value assets. While auditing and reviewing code will be a crucial part of smart contract development,\nCadence maximizes efficiency while maintaining the highest levels of safety and security at its foundation.\nIt accomplishes this via a strong static type system, design by contract, and ownership primitives inspired by linear types (which are useful when dealing with assets)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Clarity:"})," Code needs to be easy to read, and its meaning should be as unambiguous as possible.\nIt should also be suited for verification so that tooling can help with ensuring safety and security guarantees.\nThese guarantees can be achieved by making the code declarative and allowing the developer to express their intentions directly.\nWe make those intentions explicit by design, which, along with readability, make auditing and reviewing more efficient, at a small cost to verbosity."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Approachability:"})," Writing code and creating programs should be as approachable as possible.\nIncorporating features from languages like Swift and Rust, developers should find Cadence\u2019s syntax and semantics familiar.\nPractical tooling, documentation, and examples enable developers to start creating programs quickly and effectively."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Developer Experience:"})," The developer should be supported throughout the entire development lifecycle, from initial application logic to on-chain bugfixes."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Intuiting Ownership with Resources:"})," Resources are a composite data type, similar to a struct, that expresses direct ownership of assets.\nCadence\u2019s strong static type system ensures that resources can only exist in one location at a time and cannot be copied or lost because of a coding mistake.\nMost smart contract languages currently use a ledger-style approach to record ownership,\nwhere an asset like a fungible token is stored in the smart contract as an entry in a central ledger.\nCadence\u2019s resources directly tie an asset\u2019s ownership to the account that owns it by saving the resource in the account\u2019s storage.\nAs a result, ownership isn\u2019t centralized in a smart contract\u2019s storage. Each account owns its assets,\nand the assets can be transferred freely between accounts without the need for arbitration by a central smart contract."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"addressing-challenges-with-existing-languages",children:"Addressing Challenges with Existing Languages"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Other languages pioneered smart contract development, but they lack in areas that affect the long-term viability of next-generation applications."}),"\n",(0,n.jsx)(t.h3,{id:"safety",children:"Safety"}),"\n",(0,n.jsx)(t.p,{children:"Safety is the reliability of a smart contract to perform its function as intended.\nIt is heavily influenced by the unchangeable-once-deployed nature of smart contracts:\nDevelopers must take certain precautions in order to avoid introducing any potentially catastrophic vulnerabilities\nprior to publishing a smart contract on the blockchain.\nIt is standard across many blockchains that modifying or updating a smart contract, even to fix a vulnerability, is not allowed.\nThus, any bugs that are present in the smart contract will exist forever."}),"\n",(0,n.jsx)(t.p,{children:"For example, in 2016, an overlooked vulnerability in an Ethereum DAO smart contract (Decentralized Autonomous Organization)\nsaw millions of dollars siphoned from a smart contract,\neventually leading to a fork in Ethereum and two separate active blockchains (Ethereum and Ethereum Classic)."}),"\n",(0,n.jsx)(t.p,{children:"Bug fixes are only possible if a smart contract is designed to support changes,\na feature that introduces complexity and security issues.\nLengthy auditing and review processes can ensure a bug-free smart contract.\nStill, they add substantial time to the already time-consuming task of getting the smart contract\u2019s core logic working correctly."}),"\n",(0,n.jsx)(t.p,{children:"Overlooked mistakes cause the most damaging scenarios.\nIt is easy to lose or duplicate monetary value or assets in existing languages because they don\u2019t check relevant invariants\nor make it harder to express them.\nFor example, a plain number represents a transferred amount that can be accidentally (or maliciously) multiplied or ignored."}),"\n",(0,n.jsxs)(t.p,{children:["Some languages also express behaviors that developers tend to forget about.\nFor example, a fixed-range type might express monetary value, without considerations for a potential overflow or underflow.\nIn Solidity, Ethereum's smart contract language, an overflow causes the value to wrap around, as shown ",(0,n.jsx)(t.a,{href:"https://ethfiddle.com/CAp-kQrDUP",children:"here"}),".\nSolidity also allows contracts to declare variables without initializing them.\nIf the developer forgets to add an initialization somewhere,\nand then tries to read the variable somewhere else in the code expecting it to be a specific value, issues will occur."]}),"\n",(0,n.jsx)(t.p,{children:"Cadence is type safe and has a strong static type system,\nwhich prevents important classes of erroneous or undesirable program behavior at compile-time (i.e., before the program is run on-chain).\nTypes are checked statically and are not implicitly converted. Cadence also improves the safety of programs by preventing arithmetic underflow and overflow,\nintroduces optionals to make nil-cases explicit, and always requires variables to be initialized.\nThis helps ensure the behavior of these smart contracts is apparent and not dependent on context."}),"\n",(0,n.jsx)(t.h3,{id:"security",children:"Security"}),"\n",(0,n.jsx)(t.p,{children:"Security, in combination with safety, ensures the successful execution of a smart contract over time\nby preventing unsanctioned access and guaranteeing that only authorized actions can be performed in the protocol.\nIn some languages, functions are public by default, creating vulnerabilities that allow malicious users to find attack vectors.\nCadence utilizes capability-based security, which allows the type system to enforce access control based on rules that users and developers have control over."}),"\n",(0,n.jsx)(t.p,{children:"Security is a consideration when interacting with other smart contracts. Any external call potentially allows malicious code to be executed.\nFor example, in Solidity, when the called function signature does not match any of the available ones, it triggers Solidity\u2019s fallback functions.\nThese functions can be used in malicious ways. Language features such as multiple inheritances and overloading or dispatch can also make it difficult\nto determine which code is invoked."}),"\n",(0,n.jsxs)(t.p,{children:["In Cadence, the safety and security of programs are enhanced by ",(0,n.jsx)(t.strong,{children:"Design By Contract"})," and ",(0,n.jsx)(t.strong,{children:"Ownership Primitives."}),"\nDesign by contract allows developers to state pre-conditions and post-conditions for functions and interfaces in a declarative manner\nso that callers can be certain about the behavior of called code. Ownership primitives are inspired by linear types and increase safety when working with assets.\nThey ensure that valuable assets are, for example, not accidentally or maliciously lost or duplicated."]}),"\n",(0,n.jsx)(t.h3,{id:"clarity-and-approachability",children:"Clarity and Approachability"}),"\n",(0,n.jsxs)(t.p,{children:["Implicitness, context-dependability, and expressiveness are language-based challenges that developers often encounter.\nThey affect the clarity (i.e. the readability of code and the ability to determine its intended function)\nand the approachability (i.e. the ability to interpret or write code) of the language and the programs built using it.\nFor example, in Solidity, storage must be implemented in a low-level key-value manner, which obfuscates the developer\u2019s intentions.\nSyntax confusion is another example, with \u201c=+\u201d being legal syntax leading to an assignment instead of a probably-intended increment.\nSolidity also has features with uncommon behaviors that can lead to unintended results.\n",(0,n.jsx)(t.a,{href:"https://medium.com/consensys-diligence/a-case-against-inheritance-in-smart-contracts-d7f2c738f78e",children:"Multiple inheritance may lead to unexpected behaviours in the program"}),",\nand testing and auditing the code is unlikely to identify this issue."]}),"\n",(0,n.jsxs)(t.p,{children:["The Ethereum blockchain\u2019s code immutability showcases the need for considerations around extensibility and mechanisms that allow ad-hoc fixes.\nDevelopers using custom-made approaches such as the 'data separation' approach to upgradability\nmay run into problems with the complexity of data structures,\nwhile developers using \u2018delegatecall-based proxies` may run into problems with the consistency of memory layouts.\nEither way, these challenges compromise approachability and overall extensibility.\nCadence has ",(0,n.jsx)(t.a,{href:"/docs/next/cadence/language/contract-updatability",children:"contract upgradability built in by default"}),",\nand contracts can be made immutable by removing all keys from an account."]}),"\n",(0,n.jsx)(t.p,{children:"Cadence improves the clarity and extensibility of programs by utilizing interfaces to allow extensibility, code reuse, and interoperability between contracts.\nCadence modules also have configurable and transparent upgradeability built-in to enable projects to test and iterate before making their code immutable."}),"\n",(0,n.jsx)(t.p,{children:"Cadence allows the use of argument labels to describe the meaning of function arguments.\nIt also provides a rich standard library with useful data structures (e.g., dictionaries, sets) and data types for common use cases,\nlike fixed-point arithmetic, which helps when working with currencies."}),"\n",(0,n.jsx)(t.h2,{id:"intuiting-ownership-with-resources",children:"Intuiting Ownership with Resources"}),"\n",(0,n.jsx)(t.p,{children:"Most smart contract languages currently use a ledger-style approach to record ownership,\nwhere an asset is stored in the smart contract as an entry in a central ledger, and this ledger is the source of truth around asset ownership.\nThere are many disadvantages to this design, especially when it comes to tracking the ownership of multiple assets belonging to a single account.\nTo find out all of the assets that an account owns, you would have to enumerate all the possible smart contracts that could potentially include this account\nand search to see if the account owns these assets."}),"\n",(0,n.jsx)(t.p,{children:"In a resource-oriented language like Cadence, resources directly tie an asset to the account that owns it\nby saving the resource in the account\u2019s storage. As a result, ownership isn\u2019t centralized in a single, central smart contract\u2019s storage.\nInstead, each account owns and stores its own assets, and the assets can be transferred freely between accounts without the need for arbitration by a central smart contract."}),"\n",(0,n.jsx)(t.p,{children:"Resources are inspired by linear types and increase safety when working with assets, which often have real, intrinsic value.\nResources, as enforced by Cadence\u2019s type system, ensure that assets are correctly manipulated and not abused."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Every resource has exactly one owner. If a resource is used as a function parameter, an initial value for a variable, or something similar, the object is not copied.\nInstead, it is moved to the new location, and the old location is immediately invalidated."}),"\n",(0,n.jsx)(t.li,{children:"The language will report an error if ownership of a resource was not properly transferred, i.e.,\nwhen the program attempts to introduce multiple owners for the resource or the resource ends up in a state where it does not have an owner.\nFor example, a resource can only be assigned to exactly one variable and cannot be passed to functions multiple times."}),"\n",(0,n.jsx)(t.li,{children:"Resources cannot go out of scope. If a function or transaction removes a resource from an account\u2019s storage,\nit either needs to end the transaction in an account's storage, or it needs to be explicitly and safely deleted. There is no \u201cgarbage collection\u201d for resources."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The special status of Resource objects must be enforced by the runtime; if they were just a compiler abstraction it would be easy for malicious code to break the value guarantees."}),"\n",(0,n.jsx)(t.p,{children:"Resources change how assets are used in a programming environment to better resemble assets in the real world.\nUsers store their currencies and assets in their own account, in their own wallet storage, and they can do with them as they wish.\nUsers can define custom logic and structures for resources that give them flexibility with how they are stored.\nAdditionally, because everyone stores their own assets, the calculation and charging of state rent is fair and balanced across all users in the network."}),"\n",(0,n.jsx)(t.h2,{id:"an-interpreted-language",children:"An Interpreted Language"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Currently, Cadence is an interpreted language, as opposed to a compiled language. This means that there is no Cadence Assembly, bytecode, compiler, or Cadence VM."}),"\n",(0,n.jsx)(t.p,{children:"The structure of the language lends itself well to compilation (for example, static typing),\nbut using an interpreter for the first version allows us to refine the language features more quickly as we define them."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-cadence",children:"Getting Started with Cadence"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Now that you've learned about the goals and design of Cadence and Flow, you're ready to get started with the Flow emulator and tools!\nGo to the ",(0,n.jsx)(t.a,{href:"/docs/next/cadence/tutorial/first-steps",children:"Getting Started"})," page to work through language fundamentals and tutorials."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}}}]);