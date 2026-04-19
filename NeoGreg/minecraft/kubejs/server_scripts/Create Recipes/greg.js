ServerEvents.recipes(event => {
//Casings
    function casing(input, output, circuit){
        event.recipes.create.mechanical_crafting(output, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: input,
            B: circuit
        })
    }
//Bricked Hulls
    function hull(output, input, circuit){
        event.recipes.create.mechanical_crafting(output, [
            'AAA',
            'ABA',
            'CCC'
        ], {
            A: input,
            B: circuit,
            C: 'minecraft:bricks'
        })
    }
//Steam machines
    function solidboiler(output, plate, burner, hull){
        event.recipes.create.mechanical_crafting(output, [
            'AAA',
            'ABA',
            'CDC'
        ], {
            A: plate,
            B: burner,
            C: 'minecraft:bricks',
            D: hull
        })
    }
//Functions
    function milling(output, input){
        event.recipes.create.milling(output, input)
    }
    function splashing(output, input){
        event.recipes.create.splashing(output, input)
    }
    function filling(output, input){
        event.recipes.create.filling(output, input)
    }

    casing('gtceu:bronze_plate', 'gtceu:bronze_machine_casing', ['create:precision_mechanism', '#gtceu:circuits/ulv'])
    casing('gtceu:steel_plate', 'gtceu:steel_machine_casing', ['create:precision_mechanism', '#gtceu:circuits/ulv'])
    hull('gtceu:bronze_brick_casing', 'gtceu:bronze_plate', ['create:precision_mechanism', '#gtceu:circuits/ulv'])
    hull('gtceu:steel_brick_casing', 'gtceu:steel_plate', ['create:precision_mechanism', '#gtceu:circuits/ulv'])
    solidboiler('gtceu:lp_steam_solid_boiler', 'gtceu:bronze_plate', 'minecraft:furnace', 'gtceu:bronze_brick_casing')
    solidboiler('gtceu:hp_steam_solid_boiler', 'gtceu:steel_plate', 'minecraft:furnace', 'gtceu:steel_brick_casing')
    solidboiler('gtceu:lp_steam_liquid_boiler', 'gtceu:bronze_plate', 'minecraft:glass', 'gtceu:bronze_brick_casing')
    solidboiler('gtceu:hp_steam_liquid_boiler', 'gtceu:steel_plate', 'minecraft:glass', 'gtceu:steel_brick_casing')
    solidboiler('gtceu:lp_steam_solar_boiler', 'minecraft:glass', 'gtceu:double_silver_plate', 'gtceu:bronze_brick_casing')
    solidboiler('gtceu:hp_steam_solar_boiler', 'minecraft:glass', 'gtceu:double_silver_plate', 'gtceu:steel_brick_casing')
    milling('gtceu:small_clay_dust', 'minecraft:clay_ball')
    milling('4x gtceu:coal_dust', 'gtceu:exquisite_coal_gem')
    milling('gtceu:flint_dust', 'minecraft:flint')
    //milling('gtceu:wrought_iron_dust', 'gtceu:wrought_iron_ingot')
    //milling('gtceu:lead_dust', 'gtceu:lead_ingot')
    milling('1x gtceu:brick_dust', 'minecraft:bricks')
    milling('gtceu:rose_quartz_dust', '#forge:gems/rose_quartz')
    milling('gtceu:quartz_sand_dust', '#minecraft:sand')
    milling('gtceu:charcoal_dust', 'minecraft:charcoal')
    //milling('gtceu:andesite_dust', '#create:stone_types/andesite')
    //milling('gtceu:andesite_dust', '#chipped:andesite')
    //milling('gtceu:copper_dust', 'minecraft:copper_ingot')
    //milling('gtceu:nickel_dust', 'gtceu:nickel_ingot')
    //milling('gtceu:bronze_dust', 'gtceu:bronze_ingot')
    milling('4x gtceu:coke_dust', 'gtceu:exquisite_coke_gem')
    //milling('gtceu:silver_dust', 'gtceu:silver_ingot')
    milling('2x gtceu:coke_dust', 'gtceu:flawless_coke_gem')
    milling('2x gtceu:coal_dust', 'gtceu:flawless_coal_gem')
    milling('gtceu:brass_dust', 'gtceu:brass_ingot')
    milling('1x gtceu:clay_dust', 'minecraft:clay')
    //milling('gtceu:steel_dust', 'gtceu:steel_ingot')
    //milling('gtceu:antimony_dust', 'gtceu:antimony_ingot')
    milling('gtceu:small_brick_dust', 'minecraft:brick')
    //milling('gtceu:iron_dust', 'minecraft:iron_ingot')
    milling('gtceu:coal_dust', 'minecraft:coal')
    milling('4x gtceu:rose_quartz_dust', 'gtceu:exquisite_rose_quartz_gem')
    //milling('gtceu:invar_dust', 'gtceu:invar_ingot')
    milling('gtceu:coke_dust', 'gtceu:coke_gem')
    //milling('gtceu:gold_dust', 'gtceu:gold_ingot')
    //milling('gtceu:tin_dust', 'gtceu:tin_ingot')
    //milling('gtceu:zinc_dust', 'gtceu:zinc_ingot')
    milling('2x gtceu:rose_quartz_dust', 'gtceu:flawless_rose_quartz_gem')
    //milling('gtceu:annealed_copper_dust', 'gtceu:annealed_copper_ingot')
    //milling('gtceu:electrum_dust', 'gtceu:electrum_ingot')
    filling('gtceu:treated_wood_planks', [Fluid.of(('gtceu:creosote'), 100), '#minecraft:planks'])

    //proper implementation of ingot crushing
    const ingots = Ingredient.of("#forge:ingots").itemIds
    ingots.forEach((itemid) => {
		if (
			Item.getItem(itemid).getMod() == "gtceu"
		) {
			milling('gtceu:' + itemid.slice(6,-6) + '_dust',itemid)
		}
    })
    milling('gtceu:gold_dust', 'minecraft:gold_ingot')
    milling('gtceu:iron_dust', 'minecraft:iron_ingot')
    milling('gtceu:copper_dust', 'minecraft:copper_ingot')
    milling('gtceu:brass_dust', 'create:brass_ingot')
    milling('gtceu:zinc_dust','create:zinc_ingot')
})
