initSidebarItems({"constant":[["DAYS",""],["EXISTENTIAL_DEPOSIT","The existential deposit. Set to 1/10 of the Rococo Relay Chain."],["HOURS",""],["MICROUNIT",""],["MILLISECS_PER_BLOCK","This determines the average expected block time that we are targeting. Blocks will be produced at a minimum duration defined by `SLOT_DURATION`. `SLOT_DURATION` is picked up by `pallet_timestamp` which is in turn picked up by `pallet_aura` to implement `fn slot_duration()`."],["MILLIUNIT",""],["MINUTES",""],["PRIMARY_PROBABILITY",""],["SLOT_DURATION",""],["UNIT",""],["VERSION",""],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["Call",""],["Event",""],["MultiAddress","A multi-format address wrapper for on-chain accounts."],["OriginCaller",""]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"mod":[["api",""],["opaque","Opaque types. These are used by the CLI to instantiate machinery that don’t need to know the specifics of the runtime. They can then be made to be agnostic over specific formats of data like extrinsics, allowing for them to continue syncing the network through upgrades to even the core data structures."]],"struct":[["BlockHashCount",""],["ExistentialDeposit",""],["GenesisConfig",""],["MaxLocks",""],["MaxReserves",""],["OnRuntimeUpgrade",""],["OperationalFeeMultiplier",""],["Origin","The runtime origin type representing the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["Perbill","A fixed point representation of a number in the range [0, 1]."],["Permill","A fixed point representation of a number in the range [0, 1]."],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeBlockLength",""],["RuntimeBlockWeights",""],["SessionKeys",""],["TransactionByteFee","Relay Chain `TransactionByteFee` / 10"],["Version",""],["WeightToFee","Handles converting a weight scalar to a fee value, based on the scale and granularity of the node’s balance type."]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Address","The address format for describing accounts."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["Balance","Balance of an account."],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["BlockNumber","An index to a block."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["Executive","Executive: handles dispatch to the various modules."],["ExecutivePallet",""],["Hash","A hash of some data used by the chain."],["Header","Block header type as expected by this runtime."],["Index","Index of a transaction in the chain."],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["System",""],["SystemConfig",""],["TransactionPayment",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."]]});