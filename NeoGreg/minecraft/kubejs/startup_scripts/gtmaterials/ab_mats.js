GTCEuStartupEvents.registry('gtceu:material', event => {
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')

// Icon Sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty())
    //GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    //GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    //GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    //GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Zinc.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Arsenic.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Iridium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Trinium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Rutile.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Titanium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.NaquadahEnriched.setProperty(PropertyKey.ORE, new $OreProperty())
    
    event.create('desh')
        .ingot()
        .ore()
        .color(0xF2A057).secondaryColor(0x2E2F04)
        .element('desh')
        .iconSet(METALLIC)
        .flags(plates, dense_plate)

    event.create('ostrum')
        .ingot()
        .ore()
        .color(0xE5939B).secondaryColor(0x2F0425)
        .element('ostrum')
        .iconSet(METALLIC)
        .flags(plates, dense_plate)

    event.create('calorite')
        .ingot()
        .ore()
        .color(0xE65757).secondaryColor(0x2F0506)
        .element('calorite')
        .iconSet(METALLIC)
        .flags(plates, dense_plate)
    
    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE)
        .rotorStats(400,400,800,90000)
        .blastTemp(10000,"highest",524000,90)
        .liquid()

    event.create('uranium_fuel')
    	.components('1x uranium_235', '3x uranium')
    	.ingot()
    	.iconSet(METALLIC)
    	.flags(rod, bolt_and_screw)
    	.color(0x00ff00)

	event.create('mox_fuel')
    	.components('1x plutonium_241', '3x uranium')
    	.ingot()
    	.iconSet(METALLIC)
    	.flags(rod, bolt_and_screw)
    	.color(0xff0000)

	event.create('depleted_uranium_fuel')
    	//.components('Uranium', 'unknown')
    	.formula("U?")
    	.ingot()
    	.iconSet(METALLIC)
    	.flags(rod, bolt_and_screw)
    	.color(0x001100)

	event.create('depleted_mox_fuel')
    	//.components('Plutonium', 'unknown')
    	.formula("Pu?")
    	.ingot()
    	.iconSet(METALLIC)
    	.flags(rod, bolt_and_screw)
    	.color(0x110000)

    event.create('supercritical_steam')
    	.components('1x water')
    	.gas()
    	.color(0xeeeeee)
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
