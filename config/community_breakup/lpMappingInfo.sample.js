const lpUsersMapping = {
  user1: ['0x057fcD7BD66e0b0e7CBF387D12b2A49A20d30922', '38.71469261'],
  user2: ['0x88a9531Dd0b95D5fd9193D03f8DF715B710EEA62', '197.681924'],
  user3: ['0xa9469206473c41646c42a2433437ceAa992c4d54', '116.2902883'],
  user4: ['0xD7c01CB09870c3E810a56F0f75BD7a0D995A8d8c', '91.27023006'],
  user5: ['0x3c04eC0d34F8C074644A792Ce04366AB789D3EB3', '4047.78834'],
  user6: ['0x642d9F5Ba5fc0664eCE65Bf8A4179E6ef3aCC876', '2855.470165'],
  user7: ['0xE89eeb80C94479a04F5A86c113E987b90d5B22C8', '480.1203516'],
  user8: ['0x9fBA986Ca84Cf5a86d22443BE56a6593fCe05BF0', '103.3698151'],
  user9: ['0xb736828404596f5a69c828996397BA629EFb9cdb', '162.704991'],
  user10: ['0x171ab540b9Cb730626dB91f648E2b09Eb5363484', '3389.536891'],
  user11: ['0x9f9433aa66A6E130D45bAc7c6754d859C030c897', '328.2169005'],
  user12: ['0x8613017807c38bB4134628d2D4BB7A6Ab043C48a', '413.7134984'],
  user13: ['0xd0A9c2A0fD3930E7972F2bdeA8dB1649aE167170', '541.0099595'],
  user14: ['0x432DcBdA06e8B296CA29705572D7cb6315Ed8Bed', '303.2377396'],
  user15: ['0x3AdA13f58D139564f486e5c6f220D6C1a28f72E8', '352.7265375'],
  user16: ['0x33666A618576F341Faf0437C3d9964d003c097D7', '209.5393525'],
  user17: ['0x90aBCf1598ed3077861bCFb3B11EFcd1D7277223', '653.7820709'],
  user18: ['0xd507D4Af71088BAfbf2eA0CdB6962694F850DE01', '146.4225839'],
  user19: ['0xEb56B3A0474462Cc501D94100719B07159430B16', '68.78776673'],
  user20: ['0x9fA933f60BCc5E63F75F210929839f91F55b919C', '266.3916052'],
  user21: ['0x092f56D0279Eefbf1D1A3117283F2e0643176939', '157.2266748'],
  user22: ['0x18f768455E7f5fB09fC491fd86bcc282BcDD5973', '545.9975313'],
  user23: ['0x4fd896a8Ee55bd593E8D3171fF1E9CF193D0F9C1', '944.3715038'],
  user24: ['0xD2ab8d0af504f286e498359B76614F7C3143038E', '543.4948286'],
  user25: ['0x8740D9eC65b40bE5EbB84BD22607e81260fe3a3a', '282.7641835'],
  user26: ['0x3D079edE8F85c15711C38a57b4aeC6d9C397c659', '357.1501895'],
  user27: ['0xF26E5B93453a69a0297Dc66e7bbD750d2B28160B', '63.9534333'],
  user28: ['0xA9EBCD5415F36434bb932Fd9e4Dec3C19D327D4F', '135.7299546'],
  user29: ['0xc9153d97b103F6Df5fbD8239Be4F036a2734a46E', '10.38087466'],
  user30: ['0x9B4B4081bA1Ac9471c67fE77005dcd4F0Af561A9', '211.6123037'],
  user31: ['0x1C98d96D2DfA977cA557AcdCDBEA3a124e0565e5', '101.8178751'],
  user32: ['0x0bB43925166231E896D00452b9CE508B2B47c313', '511.0550858'],
  user33: ['0x18cE27Dbb6cbda96DecCF3E5CeE95Dfd9eb977A9', '859.3292917'],
  user34: ['0xcfd39CA3e95c25FA2d3d0dA00f6dF9E19Efb91F2', '289.7476176'],
  user35: ['0x541958fe5858dfE35F875726BAA2253dD00D5DE9', '577.6833776'],
  user36: ['0xA8Ef6746806CA6a376f0f89249dd0297279F286E', '411.8170842'],
  user37: ['0xD905DE91f928b20EA0cCf455e5bA07eB6373955C', '1099.714145'],
  user38: ['0x3e1141a4Ea65f42a29891a1c5229665c89aB84C1', '203.8947083'],
  user39: ['0xf4eCCc4FD78A22d78044b83531228af04703EE72', '1155.968835'],
  user40: ['0x5FA1f4d5439a0Ec1163bC52B3dAa49651FE3FfA3', '84.38501876'],
  user41: ['0x683a42E5B414Ae5cF79ece7e369cA5937fdcDC11', '103.0532369'],
  user42: ['0xa8D092b8b1A07EF7b8b409cEd7CFB13C0E46E439', '2165.079208'],
  user43: ['0x0564Ef02D9a6c0Cd54EA09a05d1075deFDb44A20', '4.590663366'],
  user44: ['0xA7CbE59f4f6A39AcE67defE064a1cCF4d3588D4c', '241.9278899'],
  user45: ['0xB3cc5EBCd197Ffa5a30436E8f766b6A01623e406', '81.41752132'],
  user46: ['0x96c825a14934a121E60FC3B2D5926B0f1f47802c', '94.54986395'],
  user47: ['0x804DCe9E275f0DC3DE604661E4D373E592CaA3fC', '80.20997451'],
  user48: ['0xe8f57953431F94b9AFC820ca220B25a2849Ae5Aa', '17.69637658'],
  user49: ['0xE743068e740b2a383904FdEFAdC42e25c8d79E45', '26.49114536'],
  user50: ['0x358c84fAA7f860ab41b93edCcB7e64f7Eb330Bb1', '78.57663907'],
  user51: ['0xd38F0deEB124159575F70b1F09f5310aB4424EF2', '39.18955972'],
  user52: ['0x61F551b8546217db57A076913f95A0154921C89b', '26.11431448'],
  user53: ['0x58e6fEa013f198c86B7EcF76b36157e09b1413aC', '56.24789646'],
  user54: ['0x128e5625e15FdBA91d6CcB1AbDFdC62b5d152b4f', '76.18578336'],
  user55: ['0xDf8D2A986Dd8998148893b59Fed435CFd8018527', '33.69265341'],
  user56: ['0x01222A114552e89E4C548170f8c1f4d5460D255A', '29.44083625'],
  user57: ['0xF7B18e107eb36797f4cE36dE756630B9C30969ad', '71.24634542'],
  user58: ['0x81016B5FA82B628E7653E63F43882009F90DC2B6', '307.3015835'],
  user59: ['0xf9cAfC659113A7F3A3cE191973f0c297Af4002c8', '30.87866178'],
  user60: ['0x874A282B81eDC36A9FC93aE5b82633920F46496D', '19.23444922'],
  user61: ['0x138Dd537D56F2F2761a6fC0A2A0AcE67D55480FE', '226.0688801'],
  user62: ['0x71dfD2baB718F5bB30f1099494a68752B5d2f2e2', '26.45482885'],
  user63: ['0xb867F7C6Fc267e69a269345888d5B96437757031', '41.22257694'],
  user64: ['0xEaC03Ab059b522886A6F273BD96b26bD86a0b4a2', '602.3239694'],
  user65: ['0xe1F21Ad5246a5b484c4925B26fA9Cc77e4B99CdA', '205.0501621'],
  user66: ['0x7e86b2E9B9e6c0EE02b0200648d9FcF20557e3C5', '174.6525171'],
  user67: ['0xf5dCb2a47f738d8bA39F9Fa2DdC7592f268a262A', '1311.062185'],
  user68: ['0x8BC0Ed0627E9c406C6e781F1690441d57Ce05B4A', '24.93868283'],
  user69: ['0x568106712b41EacbF2A8643Ed2095b5327B61a5D', '410.7844077'],
  user70: ['0xFF7e1e0E03841622a58BF5cab7767e38B6155319', '41.29149184'],
  user71: ['0xC0385C781b2F35Ae0Ba54C2948f4C23aFa3bB954', '844.2524824'],
  user72: ['0x6cca2005D7b45E8bd08f7a916f7B87Dc7bcF7BBb', '16.93819303'],
  user73: ['0xC1D14a72A1adDa0585b673ae74982Fb684508521', '76.14110624'],
  user74: ['0x1083D7254E01beCd64C3230612BF20E14010d646', '21.48212932'],
  user75: ['0xca4aD39F872E89Ef23eABd5716363Fc22513E147', '72.92638775'],
  user76: ['0x5e93941A8f3Aede7788188b6CB8092b6e57d02A6', '64.98020175'],
  user77: ['0xa25A9b7c73158B3B34215925796Ce6Aa8100C13a', '1499.852209'],
  user78: ['0x7763D4CE482C35B59AA0fc48Ae2EABd00F60b82e', '39.21323472'],
  user79: ['0x4b41D5a8466710F265C2f476C98dd43a6553A913', '91.8962917'],
  user80: ['0x0056BcFe33f5c6DfA62B6d3d3CF5A957429828BB', '182.2110196'],
  user81: ['0x9f8322bBc6D512F431a0a2Aca2d732956c62de80', '26.7380449'],
  user82: ['0xCd33c9Af94dD6e4Ae5DBA4654B31CEc1042108b9', '91.29766329'],
  user83: ['0x09A4fd364E8b7B8eBBc8109da48c086422Ef0c17', '52.97107622'],
  user84: ['0xa2DdD3e7d8935d0941bA21CD8Ad814320ceF3770', '72.53721706'],
  user85: ['0xbd17026418b71447AD99DCD8E01bcD6fE38f879A', '45.17236676'],
  user86: ['0x9543746e414926D1695eC001BC7B76277895490f', '653.2485832'],
  user87: ['0xa09CE3aF7c2DD44088855734EcCEcFfdCC79B6E7', '29.99211453'],
  user88: ['0xaf329A2986d7f78991aB5AEdAD6c7c3a2bC760a5', '177.4276197'],
  user89: ['0x2Be1dF2C4abA8f93d030885c3B190e9CDe9e494E', '135.0971602'],
  user90: ['0xAdc3C1aC7b171B5A2F7E58c52203c1aF37E76ab4', '4.21128017'],
  user91: ['0x33c5756eD0a5eeA92c4de11Cf181910Ee0E677e7', '353.5287952'],
  user92: ['0x96F16717ad65DE81D83B665bdC48784807bC1e37', '213.6409598'],
  user93: ['0xFEeb64A9bB1c5beb57D6e17726c3c8FaAeCE5C2A', '18.699048'],
  user94: ['0x41C8557B677485270Ba3F198A87Bf3545e9427Fa', '24.07496654'],
  user95: ['0x927Bab95Fd8489A7F8C9B974474b391dcb65De2E', '189.5387207'],
  user96: ['0x79e4d04A422123485333485EF3B48012a7F7B8bc', '3.318040465'],
  user97: ['0xeBB13E21Fb572469eCfAb09034051b855B901d63', '4.587407513'],
  user98: ['0x630C2BE0dF79faa4E1bF28D02F573FE5B18EfE87', '9.413534949'],
  user99: ['0x05A1ff0a32bc24265BCB39499d0c5D9A6cb2011c', '8.570036887'],
  user100: ['0x5eE8260C96cE5E7fB2158c13e41aDBecD01FA79f', '7.112756829'],
  user101: ['0x0CB63719D7fbB807f82423ca42Cc3506a5AEDc10', '7.08482111'],
}

module.exports = {
  lpUsersMapping
}
