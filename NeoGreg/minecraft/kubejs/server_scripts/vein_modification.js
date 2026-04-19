GTCEuServerEvents.oreVeins(event => {
	//MOON
    //Molybdenum
        event.add("kubejs:molybdenum_vein_mn", vein => {
            vein.weight(5)
            vein.clusterSize(27)
            vein.density(0.8)
            vein.discardChanceOnAirExposure(0)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.biomes("ad_astra:lunar_wastelands")
            vein.heightRangeUniform(20, 50)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Molybdenum)
                .placement("surface")
                .density(0.4)
                .radius(5)
            ) 
        })
    
    //Quartzite
        event.add("kubejs:quartz_vein_mn", vein => {
            vein.weight(20)
            vein.clusterSize(29)
            vein.density(0.8)
            vein.discardChanceOnAirExposure(0)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.biomes("ad_astra:lunar_wastelands")
            vein.heightRangeUniform(40, 80)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Quartzite)
                .placement("surface")
                .density(0.4)
                .radius(5)
            ) 
        })
    
    //Monazite
        event.add("kubejs:monazite_vein_mn", vein => {
            vein.weight(30)
            vein.clusterSize(36)
            vein.density(0.8)
            vein.discardChanceOnAirExposure(0)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.biomes("ad_astra:lunar_wastelands")
            vein.heightRangeUniform(20, 40)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Monazite)
                .placement("surface")
                .density(0.4)
                .radius(5)
            ) 
        })
    
    //Ilmenite
        event.add("kubejs:ilmenite_vein_mn", vein => {
            vein.weight(30)
            vein.clusterSize(34)
            vein.density(0.8)
            vein.discardChanceOnAirExposure(0)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.biomes("ad_astra:lunar_wastelands")
            vein.heightRangeUniform(20, 40)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Uvarovite).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Ilmenite)
                .placement("surface")
                .density(0.4)
                .radius(5)
            ) 
        })
    
    //Copper
        event.add("kubejs:copper_vein_mn", vein => {
            vein.weight(80)
            vein.clusterSize(40)
            vein.density(0.8)
            vein.discardChanceOnAirExposure(0)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.biomes("ad_astra:lunar_wastelands")
            vein.heightRangeUniform(-40, 10)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.Chalcopyrite).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Copper)
                .placement("surface")
                .density(0.4)
                .radius(5)
            ) 
        })
    
    //Galena
        event.add("kubejs:galena_vein_mn", vein => {
            vein.weight(40)
            vein.clusterSize(36)
            vein.density(0.8)
            vein.discardChanceOnAirExposure(0)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.biomes("ad_astra:lunar_wastelands")
            vein.heightRangeUniform(-5, 45)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                    .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Galena)
                .placement("surface")
                .density(0.4)
                .radius(5)
            ) 
        })
    
    //Cassiterite
        event.add("kubejs:cassiterite_vein_mn", vein => {
            vein.weight(50)
            vein.clusterSize(44)
            vein.density(0.8)
            vein.discardChanceOnAirExposure(0)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.biomes("ad_astra:lunar_wastelands")
            vein.heightRangeUniform(60, 220)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(3).mat(GTMaterials.Tin).size(2, 4))
                    .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Cassiterite)
                .placement("surface")
                .density(0.4)
                .radius(5)
            ) 
        })
    //Iron
    event.add("kubejs:iron_vein_mn", vein => {
        vein.weight(80)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Goethite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(8, 8))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//tungsten (small)
    event.add("kubejs:tungstate_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(10)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                //.layer(l => l.weight(1).mat(GTMaterials.get('desh')).size(8, 16))
                //.layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Tungstate).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Scheelite).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tungstate)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Desh
    event.add("kubejs:desh_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get('desh')).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                //.layer(l => l.weight(1).mat(GTMaterials.Tungstate).size(1, 1))
                //.layer(l => l.weight(1).mat(GTMaterials.Scheelite).size(1, 1))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('desh'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
	event.modify("gtceu:magnetite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer("ad_astra_moon")
        vein.biomes("ad_astra:lunar_wastelands")
    })
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer("ad_astra_moon")
        vein.biomes("ad_astra:lunar_wastelands")
    })
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer('ad_astra_moon')
        vein.biomes('ad_astra:lunar_wastelands')
    })
    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer('ad_astra_moon')
        vein.biomes('ad_astra:lunar_wastelands')
    })
    //MARS
    event.modify("gtceu:naquadah_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer('ad_astra_mars')
        vein.biomes('ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps')
    })
    event.modify("gtceu:scheelite_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer('ad_astra_mars')
        vein.biomes('ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps')
    })
//Ostrum
    event.add("kubejs:ostrum_vein_ma", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer('ad_astra_mars')
        vein.dimensions("ad_astra:mars")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('ostrum')).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('ostrum')).size(3, 9))
                .layer(l => l.weight(2).mat(GTMaterials.Tantalite).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('ostrum'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Sulfur
    event.add("kubejs:sulfur_vein_ma", vein => {
        vein.weight(100)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Sulfur).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Quartzite
    event.add("kubejs:quartz_vein_ma", vein => {
        vein.weight(20)
        vein.clusterSize(29)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Quartzite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Redstone
    event.add("kubejs:redstone_vein_ma", vein => {
        vein.weight(60)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-65, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Redstone).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Redstone)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Nickel
    event.add("kubejs:nickel_vein_ma", vein => {
        vein.weight(40)
        vein.clusterSize(34)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-10, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Garnierite).size(6, 12))
                .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Arsenic
    event.add("kubejs:arsenic_vein_ma", vein => {
        vein.weight(60)
        vein.clusterSize(20)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-40, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Arsenic).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Bismuth).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Antimony).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Arsenic)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Gold
    event.add("kubejs:gold_vein_ma", vein => {
        vein.weight(160)
        vein.clusterSize(40)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Magnetite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnetite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Iron
    event.add("kubejs:iron_vein_ma", vein => {
        vein.weight(160)
        vein.clusterSize(44)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Goethite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Hematite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Goethite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Beryllium
    event.add("kubejs:beryllium_vein_ma", vein => {
        vein.weight(30)
        vein.clusterSize(50)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(5, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Emerald).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Beryllium)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Tetrahedrite
    event.add("kubejs:tetrahedrite_vein_ma", vein => {
        vein.weight(70)
        vein.clusterSize(46)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(80, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Tetrahedrite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Galena
    event.add("kubejs:galena_vein_ma", vein => {
        vein.weight(40)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-5, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Salts
    event.add("kubejs:salts_vein_mn", vein => {
        vein.weight(50)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(50, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.RockSalt)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//MERCURY
//Molybdenum
    event.add("kubejs:molybdenum_vein_mc", vein => {
    // Basic vein generation properties
        vein.weight(5)
        vein.clusterSize(27)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
    // Define a height range:
        vein.heightRangeUniform(20, 50)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenum)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Diamond
    event.add("kubejs:diamond_vein_mc", vein => {
        vein.weight(40)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Diamond).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Coal).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Graphite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Redstone
    event.add("kubejs:redstone_vein_mc", vein => {
        vein.weight(60)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-65, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Redstone).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Redstone)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Ilmenite
    event.add("kubejs:ilmenite_vein_mc", vein => {
        vein.weight(30)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Uvarovite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Palladium
    event.add("kubejs:palladium_vein_mc", vein => {
        vein.weight(10)
        vein.clusterSize(25)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(5, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Platinum).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromium).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cooperite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Palladium)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Arsenic
    event.add("kubejs:arsenic_vein_mc", vein => {
        vein.weight(60)
        vein.clusterSize(20)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-40, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Arsenic).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Bismuth).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Antimony).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Arsenic)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Bauxite
    event.add("kubejs:bauxite_vein_mc", vein => {
        vein.weight(80)
        vein.clusterSize(34)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Bauxite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Iron
    event.add("kubejs:iron_vein_mc", vein => {
        vein.weight(160)
        vein.clusterSize(44)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Goethite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Hematite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Goethite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Iridium
    event.add("kubejs:iridium_vein_mc", vein => {
        vein.weight(30)
        vein.clusterSize(26)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Iridium).size(6, 12))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(4, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Platinum).size(4, 8))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Iridium)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Naquadah
    event.add("kubejs:naquadah_vein_mc", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Naquadah).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.NaquadahEnriched).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Naquadah)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//VENUS
//Sulfur
    event.add("kubejs:sulfur_vein_va", vein => {
        vein.weight(100)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Sulfur).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Pitchblende
    event.add("kubejs:pitchblende_vein_va", vein => {
        vein.weight(40)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Pitchblende).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pitchblende)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Quartzite
    event.add("kubejs:quartz_vein_va", vein => {
        vein.weight(20)
        vein.clusterSize(29)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Quartzite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Redstone
    event.add("kubejs:redstone_vein_va", vein => {
        vein.weight(60)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(-65, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Redstone).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Redstone)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Monazite
    event.add("kubejs:monazite_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Monazite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Nickel
    event.add("kubejs:nickel_vein_va", vein => {
        vein.weight(40)
        vein.clusterSize(34)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(-10, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Garnierite).size(6, 12))
                .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Beryllium
    event.add("kubejs:beryllium_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(50)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(5, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Emerald).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Beryllium)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Tetrahedrite
    event.add("kubejs:tetrahedrite_vein_va", vein => {
        vein.weight(70)
        vein.clusterSize(46)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(80, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Tetrahedrite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Galena
    event.add("kubejs:galena_vein_va", vein => {
        vein.weight(40)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(-5, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Cassiterite
    event.add("kubejs:cassiterite_vein_va", vein => {
        vein.weight(50)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(60, 220)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Tin).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cassiterite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Naquadah
    event.add("kubejs:naquadah_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Naquadah).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.NaquadahEnriched).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Naquadah)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Rutile
    event.add("kubejs:rutile_vein_va", vein => {
        vein.weight(8)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Rutile).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Titanium).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Titanium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Rutile)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//calorite
    event.add("kubejs:calorite_vein_va", vein => {
        vein.weight(8)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("ad_astra_venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("calorite")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Naquadah).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Trinium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("calorite"))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
})
