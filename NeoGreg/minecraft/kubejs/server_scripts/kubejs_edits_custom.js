ServerEvents.recipes((event) => {
  event.remove({ mod: "itemfilters" });
  event.remove({ mod: "better_angel_ring" });

  //wireless card custom recipe
  event.remove({id:"ae2wtlib:quantum_bridge_card"});

  //warp stone
  event.replaceInput({id:'waystones:warp_stone'},'minecraft:emerald','gtceu:hv_field_generator');

  //remove rod recipes
  event.remove({id:'ad_astra:iron_rod'});
  event.remove({id:'ad_astra:steel_rod'});

  //no tree punching compat
  event.remove({id:'notreepunching:flint_from_gravel'});
  event.remove({output:'gtceu:flint_pickaxe'});
  event.remove({output:'gtceu:flint_shovel'});
  event.remove({output:'gtceu:flint_axe'});
  event.remove({output:'gtceu:flint_sword'});
  event.remove({output:'gtceu:flint_hoe'});
  event.remove({output:'gtceu:flint_knife'});
  event.remove({output:'notreepunching:flint_pickaxe'});
  event.remove({output:'notreepunching:iron_knife'});
  event.remove({output:'notreepunching:gold_knife'});
  event.remove({output:'notreepunching:diamond_knife'});
  event.remove({output:'notreepunching:netherite_knife'});
  event.remove({output:'notreepunching:iron_knife'});
  event.remove({output:'#notreepunching:mattocks'});
  event.remove({output:'#notreepunching:h/saws'});

  //immersive aircraft
  event.replaceInput({},'immersive_aircraft:boiler',['gtceu:lp_steam_solid_boiler','gtceu:hp_steam_solid_boiler']);
  event.replaceInput({},'immersive_aircraft:propeller','gtceu:iron_rotor');
  event.remove({id:"immersive_aircraft:boiler"});
  event.remove({id:"immersive_aircraft:propeller"});
  event.remove({id:"immersive_aircraft:gyrodyne"});
  
  event.shaped(
      Item.of('notreepunching:clay_brick', 8), // arg 1: output
      [
        'ccc',
        'cFc', // arg 2: the shape (array of strings)
        'ccc'
      ],
      {
        c:'minecraft:clay_ball',
        F:'gtceu:brick_wooden_form'
      }
    )
  event.replaceInput({},'minecraft:campfire',['minecraft:coal','minecraft:charcoal']);
  event.remove({type:'minecraft:crafting_shaped',input:'#forge:saws',input:'#minecraft:logs',output:"#minecraft:planks",mod:'gtceu'});
  event.remove({id:"notreepunching:sticks_from_planks_with_saw"});

  event.shaped(
        Item.of('minecraft:birch_planks', 2), // arg 1: output
        [
          ' s ',
          ' p ', // arg 2: the shape (array of strings)
          '   '
        ],
        {
          p:'#minecraft:birch_logs',
          s:'#notreepunching:weak_saws'
        }
      ).damageIngredient(1).keepIngredient('#notreepunching:weak_saws')
  
  event.shaped(
        Item.of('minecraft:stick', 2), // arg 1: output
        [
          ' s ',
          ' p ', // arg 2: the shape (array of strings)
          '   '
        ],
        {
          p:'#minecraft:planks',
          s:'#notreepunching:saws'
        }
      ).damageIngredient(1).keepIngredient('#notreepunching:saws')
  
  //get rid of avaritia recipes
  event.remove({type:"avaritia:shaped_table"});
  event.remove({type:"avaritia:shapeless_table"});
  event.remove({type:"avaritia:compressor"});

  //compasses
  event.replaceInput({output:'naturescompass:naturescompass'},'#minecraft:saplings','gtceu:hv_sensor');
  event.replaceInput({output:'explorerscompass:explorerscompass'},'minecraft:cobweb','gtceu:hv_sensor');

  //shield expansion
  event.remove({id:'minecraft:shield'});
  event.remove({output:"shieldexp:griefer_shield"});
  event.remove({output:"shieldexp:wooden_shield"});

  event.replaceInput({output:'shieldexp:iron_shield'},"minecraft:stick","minecraft:shield");
  event.replaceInput({output:'shieldexp:iron_shield'},"minecraft:iron_ingot","create:iron_sheet");
  event.replaceInput({output:'shieldexp:golden_shield'},"minecraft:stick","shieldexp:iron_shield");
  event.replaceInput({output:'shieldexp:golden_shield'},"minecraft:gold_ingot","create:golden_sheet");
  event.replaceInput({output:'shieldexp:diamond_shield'},"minecraft:stick","shieldexp:golden_shield");
  event.replaceInput({output:'shieldexp:diamond_shield'},"minecraft:diamond","gtceu:diamond_plate");

  //arrows
  event.replaceInput({output:'minecraft:arrow'},"minecraft:feather",["minecraft:feather","minecraft:paper"]);
  event.replaceInput({output:'minecraft:arrow'},"minecraft:flint",["minecraft:flint","#forge:nuggets"]);

  //farmer's delight knives
  event.remove({output:'#farmersdelight:tools/knives'});

  //farmer's delight paper recipe
  event.remove({id:'farmersdelight:paper_from_tree_bark'});
  
  //ad astra cleanup
  event.remove({ output: "ad_astra:fuel_refinery"});
  event.remove({ output: "ad_astra:compressor"});
  event.remove({ output: "ad_astra:etrionic_blast_furnace"});
  event.remove({ output: "ad_astra:coal_generator"});
  event.remove({ output: "ad_astra:iron_rod"});
  event.remove({ output: "ad_astra:steel_rod"});
  event.remove({ output: "ad_astra:etrionic_capacitor"});
  
  event.remove({ output: 'ad_astra:steel_engine'});
  event.remove({ output: 'ad_astra:desh_engine'});
  event.remove({ output: 'ad_astra:ostrum_engine'});
  event.remove({ output: 'ad_astra:calorite_engine'});
  //blaze burner
  event.shaped(
    Item.of('create:blaze_burner', 1), // arg 1: output
    [
      '   ',
      'BDB', // arg 2: the shape (array of strings)
      'MEM'
    ],
    {
      B: 'gtceu:double_brass_plate',
      D: 'minecraft:diamond',  //arg 3: the mapping object
      M: ['create:precision_mechanism','#gtceu:circuits/ulv'],
      E: 'create:empty_blaze_burner'
    }
  )
  
  event.remove({id:'gtceu:shapeless/dust_bronze'}); //progression change to force create before gregtech
  event.recipes.create.mixing(Item.of('gtceu:bronze_ingot', 3), [Item.of('minecraft:copper_ingot', 3),'gtceu:tin_ingot']).heated();
  //these have no use anyways and get in the way of create ore crushing
  event.remove({output:'create:crushed_raw_silver'});
  event.remove({output:'create:crushed_raw_lead'});
  event.remove({output:'create:crushed_raw_gold'});
  event.remove({output:'create:crushed_raw_iron'});
  event.remove({output:'create:crushed_raw_zinc'});
  event.remove({output:'create:crushed_raw_platinum'});
  event.remove({output:'create:crushed_raw_tin'});
  event.remove({output:'create:crushed_raw_nickel'});
  event.remove({output:'create:crushed_raw_copper'});
  
  event.remove({type: 'create:pressing', input: '#forge:ingots'});
  event.replaceInput({output: 'create:mechanical_press'}, 'minecraft:iron_block', 'gtceu:bronze_block'); //delay mechanical press so that plates aren't trivial
  event.replaceInput({output: 'create:mechanical_crafter'}, 'create:electron_tube', 'create:cogwheel'); //change mechanical crafter to be easier; makes it possible to get it before nether
  //ad astra modifications
  event.replaceInput({mod: 'ad_astra'}, 'ad_astra:steel_plate', 'gtceu:stainless_steel_plate');
  event.replaceInput({}, 'ad_astra:desh_plate', 'gtceu:titanium_plate');
  event.replaceInput({}, 'ad_astra:ostrum_plate', 'gtceu:tungsten_steel_plate');
  event.replaceInput({}, 'ad_astra:calorite_plate', 'gtceu:rhodium_plated_palladium_plate');
  event.replaceInput({}, 'ad_astra:etrionic_capacitor', '#gtceu:circuits/ev');
  
  //add lategame support for create items; i don't want you to make rose quartz for the whole game!
  event.replaceInput({input: 'minecraft:dried_kelp', mod: 'create'}, 'minecraft:dried_kelp', ['minecraft:dried_kelp','gtceu:rubber_plate','gtceu:styrene_butadiene_rubber_plate','gtceu:silicone_rubber_plate']);
  event.replaceInput({input: 'create:electron_tube'}, 'create:electron_tube', ['create:electron_tube','gtceu:vacuum_tube','gtceu:nand_chip']);

  //add support for other dough in GT food recipes
  event.replaceInput({}, 'gtceu:dough', '#forge:dough');
  event.replaceInput({id:'farmersdelight:dough_from_eggs'}, 'minecraft:wheat', '#forge:flour');
  event.replaceInput({id:'farmersdelight:dough_from_water'}, 'minecraft:wheat', '#forge:flour');

  //flour unification
  event.replaceInput({}, 'gtceu:wheat_dust', '#forge:flour');
  event.replaceInput({}, 'create:wheat_flour', '#forge:flour');

  //cooking pot fix
  event.replaceInput({output: 'farmersdelight:cooking_pot'}, 'minecraft:wooden_shovel', 'minecraft:stick');
  
  event.recipes.gtceu.assembler('precision_mechanisms_assembler') //precision mechanisms in assembler
        .itemInputs(
            '1x create:golden_sheet',
            '5x create:cogwheel',
            '5x create:large_cogwheel',
            '5x minecraft:iron_nugget'
        )
        .itemOutputs(
            '2x create:precision_mechanism'
        )
        .duration(100)
        .EUt(30)
  
  event.recipes.gtceu.alloy_smelter('andesite_alloying_zinc') //andesite alloy in alloy smelter
        .itemInputs(
            '1x create:zinc_ingot',
            '9x minecraft:andesite'
        )
        .itemOutputs(
            '9x create:andesite_alloy'
        )
        .duration(100)
        .EUt(6)
   event.recipes.gtceu.alloy_smelter('andesite_alloying_iron') //andesite alloy in alloy smelter
        .itemInputs(
            '1x minecraft:iron_ingot',
            '9x minecraft:andesite'
        )
        .itemOutputs(
            '9x create:andesite_alloy'
        )
        .duration(100)
        .EUt(6)
   //create armory integration
   event.recipes.gtceu.assembler('shotgun_shell_assembler')
        .itemInputs(
            '1x createarmory:five_five_six_casing',
            '1x gtceu:small_gunpowder_dust',
            '9x gtceu:iron_round'
        )
        .itemOutputs(
            '1x createarmory:shotgun_shell'
        )
        .duration(200)
        .EUt(30)
        .circuit(1)
   event.recipes.gtceu.assembler('fiftycal_casing_assembler')
        .itemInputs(
            '1x create:brass_sheet'
        )
        .itemOutputs(
            '10x createarmory:fifty_cal_casing'
        )
        .duration(200)
        .EUt(30)
        .circuit(1)
   event.recipes.gtceu.assembler('nine_mm_assembler')
        .itemInputs(
            '1x create:brass_sheet'
        )
        .itemOutputs(
            '20x createarmory:nine_mm_casing'
        )
        .duration(200)
        .EUt(30)
        .circuit(2)
   event.recipes.gtceu.assembler('five_five_six_casing_assembler')
        .itemInputs(
            '1x create:brass_sheet'
        )
        .itemOutputs(
            '13x createarmory:five_five_six_casing'
        )
        .duration(200)
        .EUt(30)
        .circuit(3)
    event.recipes.gtceu.canner('fiftycal_filling')
        .itemInputs(
            '1x gtceu:small_gunpowder_dust',
            '1x createarmory:fifty_cal_casing'
        )
        .itemOutputs(
            '1x createarmory:fifty_cal'
        )
        .duration(50)
        .EUt(30)
    event.recipes.gtceu.canner('nine_mm_filling')
        .itemInputs(
            '1x gtceu:small_gunpowder_dust',
            '1x createarmory:nine_mm_casing'
        )
        .itemOutputs(
            '1x createarmory:nine_mm'
        )
        .duration(50)
        .EUt(30)
    event.recipes.gtceu.canner('five_five_six_filling')
        .itemInputs(
            '1x gtceu:small_gunpowder_dust',
            '1x createarmory:five_five_six_casing'
        )
        .itemOutputs(
            '1x createarmory:five_five_six'
        )
        .duration(50)
        .EUt(30)
     //create additions motor
     event.remove({ output: 'createaddition:electric_motor'});
     event.shaped(
    Item.of('createaddition:electric_motor', 1), // arg 1: output
    [
      'WPW',
      'MCM', // arg 2: the shape (array of strings)
      'WPW'
    ],
    {
      C: 'gtceu:lv_machine_hull',
      P: 'gtceu:steel_plate',
      M: 'gtceu:lv_electric_motor',
      W: 'gtceu:copper_quadruple_wire'
    }
    )
    
    event.recipes.gtceu.macerator('netherite_scap_from_debris_macerator')
        .itemInputs(
            '1x minecraft:ancient_debris'
        )
        .itemOutputs(
            '2x minecraft:netherite_scrap'
        )
        .duration(1000)
        .EUt(400)
   
   //disable enchanting table
   event.remove({id:'minecraft:enchanting_table'});
   event.remove({id:'gtceu:assembler/enchanting_table'});
   event.recipes.gtceu.assembler('custom_enchanting_table')
           .itemInputs(
               '4x minecraft:obsidian',
               '2x minecraft:red_wool',
               '2x gtceu:diamond_plate',
               '1x minecraft:book'
           )
           .itemOutputs(
               '1x minecraft:enchanting_table'
           )
           .duration(100)
           .EUt(7)
   
   //replace printer recipe
   event.remove({output:'create_enchantment_industry:printer'});
   event.shaped(
    Item.of('create_enchantment_industry:printer', 1), // arg 1: output
    [
      'ECE',
      'ERE', // arg 2: the shape (array of strings)
      ' P '
    ],
    {
      E:'#gtceu:circuits/ev',
      C:'create:copper_casing',
      R:['minecraft:dried_kelp','gtceu:rubber_plate','gtceu:styrene_butadiene_rubber_plate','gtceu:silicone_rubber_plate'],
      P:'#forge:plates/iron'
    }
  )
  
  //cinder flour recipe for easier netherrack
  event.recipes.create.mixing('create:cinder_flour',[['gtceu:coal_dust','gtceu:charcoal_dust','gtceu:carbon_dust'],'gtceu:gold_dust','minecraft:redstone'])
  
  //campfire before charcoal
  event.replaceInput({output: 'minecraft:campfire'}, '#minecraft:coals', '#minecraft:logs');
  
  //campfire cooking copper ores into copper
  event.campfireCooking('4x create:copper_nugget', 'gtceu:raw_malachite')
  event.campfireCooking('4x create:copper_nugget', 'gtceu:raw_chalcopyrite')
  event.campfireCooking('4x create:copper_nugget', 'gtceu:raw_bornite')
  event.campfireCooking('4x create:copper_nugget', 'gtceu:raw_tetrahedrite')
  event.campfireCooking('4x create:copper_nugget', 'gtceu:raw_chalcocite')
  event.campfireCooking('4x create:copper_nugget', 'minecraft:raw_copper')
  event.campfireCooking('4x create:copper_nugget', 'gtceu:copper_dust')
  event.campfireCooking('4x create:copper_nugget', 'gtceu:chalcopyrite_dust')
  event.campfireCooking('1x create:copper_nugget', 'gtceu:tiny_copper_dust')
  event.campfireCooking('1x create:copper_nugget', 'gtceu:tiny_chalcopyrite_dust')
  event.campfireCooking('minecraft:coal', 'gtceu:raw_coal')

  //updated cooking for crushed ores too
  event.campfireCooking('2x create:copper_nugget', 'gtceu:crushed_malachite_ore')
  event.campfireCooking('2x create:copper_nugget', 'gtceu:crushed_chalcopyrite_ore')
  event.campfireCooking('2x create:copper_nugget', 'gtceu:crushed_bornite_ore')
  event.campfireCooking('2x create:copper_nugget', 'gtceu:crushed_copper_ore')
  
  //harder furnace, needs copper
  event.remove({ output: 'minecraft:furnace'});
  event.shaped(
  Item.of('minecraft:furnace', 1), // arg 1: output
  [
    'CPC',
    'PPP', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    P: 'create:copper_sheet',
    C: '#minecraft:stone_tool_materials'
  }
)
  event.recipes.gtceu.assembler('furnace_assembler_custom')
        .itemInputs(
            '8x #minecraft:stone_tool_materials'
        )
        .itemOutputs(
            '1x minecraft:furnace'
        )
        .duration(100)
        .EUt(7)
   
   //campfire cooking of cobblestone
   event.campfireCooking('minecraft:stone', 'minecraft:cobblestone')
   
   //remove all vanilla tools
   event.remove({output: 'minecraft:wooden_sword'});
   event.remove({output: 'minecraft:wooden_pickaxe'});
   event.remove({output: 'minecraft:wooden_axe'});
   event.remove({output: 'minecraft:wooden_hoe'});
   event.remove({output: 'minecraft:wooden_shovel'});
   event.remove({output: 'minecraft:stone_sword'});
   event.remove({output: 'minecraft:stone_pickaxe'});
   event.remove({output: 'minecraft:stone_axe'});
   event.remove({output: 'minecraft:stone_hoe'});
   event.remove({output: 'minecraft:stone_shovel'});
   event.remove({output: 'minecraft:iron_sword'});
   event.remove({output: 'minecraft:iron_pickaxe'});
   event.remove({output: 'minecraft:iron_axe'});
   event.remove({output: 'minecraft:iron_hoe'});
   event.remove({output: 'minecraft:iron_shovel'});
   event.remove({output: 'minecraft:diamond_sword'});
   event.remove({output: 'minecraft:diamond_pickaxe'});
   event.remove({output: 'minecraft:diamond_axe'});
   event.remove({output: 'minecraft:diamond_hoe'});
   event.remove({output: 'minecraft:diamond_shovel'});
   event.remove({output: 'minecraft:golden_sword'});
   event.remove({output: 'minecraft:golden_pickaxe'});
   event.remove({output: 'minecraft:golden_axe'});
   event.remove({output: 'minecraft:golden_hoe'});
   event.remove({output: 'minecraft:golden_shovel'});
   
   //remove default computercraft recipes; why isn't this done by default?
   event.remove({id: 'computercraft:turtle_normal'});
   event.remove({id: 'computercraft:turtle_advanced'});
   event.remove({id: 'computercraft:turtle_advanced_upgrade'});
   event.remove({id: 'computercraft:pocket_computer_normal'});
   event.remove({id: 'computercraft:pocket_computer_advanced'});
   event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'});
   event.remove({id: 'computercraft:computer_normal'});
   event.remove({id: 'computercraft:computer_advanced'});
   event.remove({id: 'computercraft:computer_advanced_upgrade'});
   event.remove({id: 'computercraft:monitor_normal'});
   event.remove({id: 'computercraft:monitor_advanced'});
   event.remove({id: 'computercraft:speaker'});
   event.remove({id: 'computercraft:printer'});
   event.remove({id: 'computercraft:wired_modem'});
   event.remove({id: 'computercraft:cable'});
   event.remove({id: 'computercraft:wireless_modem_advanced'});
   event.remove({id: 'computercraft:wireless_modem_normal'});
   event.remove({id: 'computercraft:disk_drive'});
   
   event.shapeless( //flint shards from stone
  Item.of('notreepunching:flint_shard', 1), // arg 1: output
  [
    '#notreepunching:loose_rocks','#notreepunching:loose_rocks'
  ]
)

  event.shapeless( //sticks from saplings
  Item.of('minecraft:stick', 2), // arg 1: output
  [
   '#minecraft:saplings'
  ]
  )
   
  //ad astra engines!
   event.shaped(
  Item.of('ad_astra:steel_engine', 1), // arg 1: output
  [
    'DCD',
    'PTP', // arg 2: the shape (array of strings)
    'MNM'
  ],
  {
    D:'gtceu:stainless_steel_drum',
    C:'#gtceu:circuits/ev',
    P:'gtceu:stainless_steel_normal_fluid_pipe',
    T:'gtceu:hv_electric_pump',
    M:'gtceu:hv_electric_motor',
    N:'gtceu:stainless_steel_huge_fluid_pipe'
  }
)

  event.shaped(
  Item.of('ad_astra:desh_engine', 1), // arg 1: output
  [
    'PRP',
    'SDS', // arg 2: the shape (array of strings)
    'MNM'
  ],
  {
    P:'gtceu:iv_electric_piston',
    R:'gtceu:iv_fluid_regulator',
    S:'gtceu:silver_octal_wire',
    D:'gtceu:tungsten_steel_drum',
    M:'gtceu:iv_electric_motor',
    N:'gtceu:tungsten_steel_huge_fluid_pipe'
  }
)
  event.shaped(
  Item.of('ad_astra:ostrum_engine', 1), // arg 1: output
  [
    'CRC',
    'CDC', // arg 2: the shape (array of strings)
    'MNM'
  ],
  {
    R:'gtceu:luv_fluid_regulator',
    D:'gtceu:tungsten_steel_drum',
    M:'gtceu:luv_electric_motor',
    N:'gtceu:naquadah_huge_fluid_pipe',
    C:'gtceu:superconducting_coil'
  }
)

  event.shaped(
  Item.of('ad_astra:calorite_engine', 1), // arg 1: output
  [
    'PTP',
    'CFC', // arg 2: the shape (array of strings)
    'GGG'
  ],
  {
    P:'gtceu:dense_darmstadtium_plate',
    T:'gtceu:plasma_large_turbine',
    C:'gtceu:fusion_coil',
    F:'gtceu:zpm_field_generator',
    G:'gtceu:gravitation_engine_unit'
  }
)
   //remove rolling mill recipes
   event.remove({type:'createaddition:rolling'});
   
   event.shapeless( //reenable straw
  Item.of('createaddition:straw'), // arg 1: output
  [
    'minecraft:bamboo'
  ]
)
   //avaritia endgame stuff
   event.remove({type:'avaritia:shaped_extreme_craft'});
   event.remove({type:'avaritia:shapeless_extreme_craft'});
   event.recipes.gtceu.atomic_hyperforge('endest_pearl')
           .itemInputs(
               '32x minecraft:ender_pearl',
               '1x ae2:singularity'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:endest_pearl'
           )
           .duration(100)
           .EUt(2097152)
	 event.recipes.gtceu.implosion_compressor('diamond_dust_carbon_tnt')
		   .itemInputs(
			'64x gtceu:carbon_dust',
			'4x minecraft:tnt'
		   )
	           .itemOutputs(
	               Item.of('gtceu:diamond_dust')
	           )
	           .duration(20)
	           .EUt(30)
    event.recipes.gtceu.atomic_hyperforge('infinity_nugget')
           .itemInputs(
               '1x avaritia:endest_pearl',
               '1x gtceu:gravi_star'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_nugget'
           )
           .duration(100)
           .EUt(2097152)
   event.recipes.gtceu.vacuum_freezer('infinity_dust')
           .itemInputs(
               '1x avaritia:infinity_nugget'
           )
           .itemOutputs(
               '1x gtceu:tiny_infinity_dust'
           )
           .duration(600)
           .EUt(2097152)
//circuits
    event.recipes.gtceu.circuit_assembler('supracausal_circuit_board')
        .itemInputs('16x gtceu:wetware_circuit_board', '32x gtceu:hssg_foil', '#gtceu:circuits/zpm', 'gtceu:luv_field_generator', 
            '8x gtceu:nether_star_lens')
        .inputFluids('gtceu:neutronium 288')
        .itemOutputs('16x kubejs:supracausal_circuit_board')
        .duration(1200)
        .EUt(500000)

    event.recipes.gtceu.circuit_assembler('supracausal_processing_unit')
        .itemInputs('4x kubejs:supracausal_circuit_board', 'gtceu:infinity_plate', '4x gtceu:infinity_ingot', 
            '4x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '2x gtceu:flawless_monazite_gem',  '2x gtceu:flawless_glass_gem')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('4x kubejs:supracausal_processing_unit')
        .duration(100)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('supracausal_processor')
        .itemInputs('kubejs:supracausal_processing_unit', '4x gtceu:advanced_smd_capacitor', '2x gtceu:advanced_smd_transistor', 
            '4x gtceu:crystal_soc', '2x gtceu:fine_hssg_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('16x kubejs:supracausal_processor')
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('supracausal_assembly')
        .itemInputs('kubejs:supracausal_processing_unit', '4x kubejs:supracausal_processor', '2x gtceu:crystal_soc', 
            '8x gtceu:advanced_smd_capacitor', '8x gtceu:advanced_smd_resistor', '4x gtceu:ruthenium_trinium_americium_neutronate_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('4x kubejs:supracausal_assembly')
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('supracausal_computer')
        .itemInputs('kubejs:supracausal_processing_unit', '4x kubejs:supracausal_assembly', '8x gtceu:crystal_soc', 
            '16x gtceu:advanced_smd_capacitor', '16x gtceu:advanced_smd_transistor', '8x gtceu:advanced_smd_diode', '8x gtceu:advanced_smd_resistor', 
            '16x gtceu:uhpic_chip', '4x gtceu:ruthenium_trinium_americium_neutronate_double_wire',  '16x gtceu:polybenzimidazole_foil')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:supracausal_supercomputer')
        .duration(200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('supracausal_mainframe')
        .itemInputs('4x gtceu:infinity_frame', '16x kubejs:supracausal_supercomputer', '32x gtceu:advanced_smd_capacitor', 
            '32x gtceu:advanced_smd_transistor', '32x gtceu:advanced_smd_diode', '32x gtceu:advanced_smd_resistor', '32x gtceu:advanced_smd_inductor', 
            '32x gtceu:nor_memory_chip', '32x gtceu:polybenzimidazole_foil', '8x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '4x gtceu:double_infinity_plate')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:supracausal_mainframe')
        .duration(1200)
        .EUt(3932160)
        
    event.recipes.gtceu.atomic_hyperforge('creative_tank')
           .itemInputs(
               '4x #gtceu:circuits/uev',
               '4x gtceu:double_infinity_plate',
               '1x gtceu:uhv_quantum_tank'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x gtceu:creative_tank'
           )
           .duration(100)
           .EUt(2097152)
           
    event.recipes.gtceu.atomic_hyperforge('infinity_shovel')
           .itemInputs(
               '4x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x gtceu:neutronium_shovel'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_shovel'
           )
           .duration(600)
           .EUt(2097152)

	event.recipes.gtceu.atomic_hyperforge('infinity_pickaxe')
           .itemInputs(
               '4x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x gtceu:neutronium_pickaxe'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_pickaxe'
           )
           .duration(600)
           .EUt(2097152)
           event.recipes.gtceu.atomic_hyperforge('infinity_sword')
           .itemInputs(
               '4x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x gtceu:neutronium_sword'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_sword'
           )
           .duration(600)
           .EUt(2097152)
           event.recipes.gtceu.atomic_hyperforge('infinity_axe')
           .itemInputs(
               '4x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x gtceu:neutronium_axe'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_axe'
           )
           .duration(600)
           .EUt(2097152)
           event.recipes.gtceu.atomic_hyperforge('infinity_hoe')
           .itemInputs(
               '4x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x gtceu:neutronium_hoe'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_hoe'
           )
           .duration(600)
           .EUt(2097152)
           event.recipes.gtceu.atomic_hyperforge('infinity_bow')
           .itemInputs(
               '4x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x minecraft:bow'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_bow'
           )
           .duration(600)
           .EUt(2097152)
           
           event.recipes.gtceu.atomic_hyperforge('creative_worldshaper')
           .itemInputs(
               '16x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x avaritia:infinity_hoe',
               '1x avaritia:infinity_axe',
               '1x avaritia:infinity_pickaxe',
               '1x avaritia:infinity_shovel',
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x create:handheld_worldshaper'
           )
           .duration(6000)
           .EUt(2097152)
           
           event.recipes.gtceu.atomic_hyperforge('creative_energy')
           .itemInputs(
               '16x #gtceu:circuits/uev',
               '64x gtceu:infinity_block',
               '1x gtceu:uhv_substation_output_hatch_64a'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x gtceu:creative_energy'
           )
           .duration(6000)
           .EUt(2097152)
           
           event.recipes.gtceu.atomic_hyperforge('creative_chest')
           .itemInputs(
               '16x #gtceu:circuits/uev',
               '64x gtceu:uhv_ultimate_battery',
               '1x gtceu:uhv_quantum_chest'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x gtceu:creative_chest'
           )
           .duration(6000)
           .EUt(2097152)
        
        event.recipes.gtceu.atomic_hyperforge('infinity_helmet')
           .itemInputs(
               '16x #gtceu:circuits/uev',
               '64x gtceu:uhv_ultimate_battery',
               '1x gtceu:quarktech_helmet'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_helmet'
           )
           .duration(6000)
           .EUt(2097152)
           event.recipes.gtceu.atomic_hyperforge('infinity_chestplate')
           .itemInputs(
               '16x #gtceu:circuits/uev',
               '64x gtceu:uhv_ultimate_battery',
               '1x gtceu:advanced_quarktech_chestplate'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_chestplate'
           )
           .duration(6000)
           .EUt(2097152)
           event.recipes.gtceu.atomic_hyperforge('infinity_leggings')
           .itemInputs(
               '16x #gtceu:circuits/uev',
               '64x gtceu:uhv_ultimate_battery',
               '1x gtceu:quarktech_leggings'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_pants'
           )
           .duration(6000)
           .EUt(2097152)
           event.recipes.gtceu.atomic_hyperforge('infinity_boots')
           .itemInputs(
               '16x #gtceu:circuits/uev',
               '64x gtceu:uhv_ultimate_battery',
               '1x gtceu:quarktech_boots'
           )
           .inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
           .itemOutputs(
               '1x avaritia:infinity_boots'
           )
           .duration(6000)
           .EUt(2097152)
        
        
	 event.recipes.gtceu.implosion_compressor('diamond_dust_carbon_powderbarrel')
		   .itemInputs(
			'64x gtceu:carbon_dust',
			'8x gtceu:powderbarrel'
		   )
	           .itemOutputs(
	               Item.of('gtceu:diamond_dust')
	           )
	           .duration(20)
	           .EUt(30)
	 event.recipes.gtceu.implosion_compressor('diamond_dust_carbon_itnt')
		   .itemInputs(
			'64x gtceu:carbon_dust',
			'1x gtceu:industrial_tnt'
		   )
	           .itemOutputs(
	               Item.of('gtceu:diamond_dust')
	           )
	           .duration(20)
	           .EUt(30)
	 event.recipes.gtceu.implosion_compressor('diamond_dust_carbon_dynamite')
		   .itemInputs(
			'64x gtceu:carbon_dust',
			'2x gtceu:dynamite'
		   )
	           .itemOutputs(
	               Item.of('gtceu:diamond_dust')
	           )
	           .duration(20)
	           .EUt(30)
	   event.shaped(
	          Item.of('gtceu:atomic_hyperforge', 1), // arg 1: output
	          [
	            'ESE',
	            'RAR', // arg 2: the shape (array of strings)
	            'CNC'
	          ],
	          {
	            E:'gtceu:uv_emitter',
	            S:'gtceu:uv_sensor',
	            R:'gtceu:uv_robot_arm',
	            A:'gtceu:uv_assembler',
	            C:'#gtceu:circuits/uhv',
	            N:'gtceu:uhv_machine_casing'
	          }
	        )

	   event.shapeless(
	       Item.of('ae2wtlib:quantum_bridge_card', 1), // arg 1: output
	         [
	           'ae2:advanced_card','ae2:quantum_link'
	         ]
	       )
	   event.shapeless(
	   	       Item.of('ae2wtlib:magnet_card', 1), // arg 1: output
	   	         [
	   	           'ae2:advanced_card','gtceu:hv_item_magnet'
	   	         ]
	   	       )
	   event.recipes.gtceu.forming_press('earlyprintedsilicon')
				  .notConsumable('ae2:silicon_press')
	   	          .itemInputs(
	   	          	'8x gtceu:silicon_dust'
	   	          )
	   	          .itemOutputs(
	   	              Item.of('ae2:printed_silicon')
	   	          )
	   	          .duration(600)
	   	          .EUt(30)

	  // Precision mechanisms are not craftable anymore??? No idea why, but this adds the recipe back, stolen from kubejs.com
	  event.recipes.create.sequenced_assembly([
	  		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
	  		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
	  		Item.of('create:andesite_alloy').withChance(8.0),
	  		Item.of('create:cogwheel').withChance(5.0),
	  		Item.of('create:shaft').withChance(2.0),
	  		Item.of('create:crushed_gold_ore').withChance(2.0),
	  		Item.of('2x minecraft:gold_nugget').withChance(2.0),
	  		'minecraft:iron_ingot',
	  		'minecraft:clock'
	  	], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
	  		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
	  		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
	  		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	  		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
	  		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget'])
	  	]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // set the transitional item and the number of loops

	//nuclear fuel
	event.recipes.gtceu.alloy_smelter('uranium_fuel')
		.itemInputs('1x gtceu:uranium_235_ingot','3x gtceu:uranium_ingot')
		.itemOutputs('4x gtceu:uranium_fuel_ingot')
		.duration(20)
		.EUt(30)
	event.recipes.gtceu.alloy_smelter('mox_fuel')
		.itemInputs('1x gtceu:plutonium_241_ingot','3x gtceu:uranium_ingot')
		.itemOutputs('4x gtceu:mox_fuel_ingot')
		.duration(20)
		.EUt(30)
	//fission reactor
	event.recipes.gtceu.assembler('fission_reactor')
		.itemInputs('4x gtceu:stable_machine_casing','4x gtceu:titanium_pipe_casing','4x #gtceu:circuits/ev','8x gtceu:ev_electric_piston','2x gtceu:aluminium_octal_cable')
		.inputFluids(Fluid.of('gtceu:sodium_potassium',16000))
		.itemOutputs('1x gtceu:fission_reactor')
		.duration(1800)
		.EUt(1024)
	//nuclear fission
	event.recipes.gtceu.fission_reactor('uranium_fission')
	  	.itemInputs('1x gtceu:uranium_fuel_bolt')
	  	.inputFluids(Fluid.of('gtceu:distilled_water',6000))
	  	.itemOutputs('1x gtceu:depleted_uranium_fuel_bolt')
	  	.outputFluids(Fluid.of('gtceu:supercritical_steam',6000))
	  	.duration(1200)
	  	.EUt(500)
	event.recipes.gtceu.fission_reactor('mox_fission')
	  	.itemInputs('1x gtceu:mox_fuel_bolt')
	  	.inputFluids(Fluid.of('gtceu:distilled_water',6000))
	  	.itemOutputs('1x gtceu:depleted_mox_fuel_bolt')
	  	.outputFluids(Fluid.of('gtceu:supercritical_steam',6000))
	  	.duration(1200)
	  	.EUt(500)

	//supercritical steam power gen; intended to be used with large turbines
	event.recipes.gtceu.steam_turbine('supercritical_power_gen')
		.inputFluids(Fluid.of('gtceu:supercritical_steam',1))
		.outputFluids(Fluid.of('gtceu:distilled_water',1))
		.duration(80)
		.EUt(-512)

	//nuclear fuel reprocessing
	event.recipes.gtceu.centrifuge('depleted_uranium_reprocessing')
		.itemInputs('1x gtceu:depleted_uranium_fuel_dust')
		.chancedOutput('1x gtceu:small_plutonium_dust',3333,0)
		.chancedOutput('1x gtceu:small_uranium_dust',3333,0)
		.chancedOutput('1x gtceu:small_molybdenum_dust',3333,0)
		.chancedOutput('1x gtceu:small_uranium_235_dust',3333,0)
		.duration(80)
		.EUt(512)
	event.recipes.gtceu.centrifuge('depleted_mox_reprocessing')
		.itemInputs('1x gtceu:depleted_mox_fuel_dust')
		.chancedOutput('1x gtceu:small_plutonium_dust',3333,0)
		.chancedOutput('1x gtceu:small_uranium_dust',3333,0)
		.chancedOutput('1x gtceu:small_neodymium_dust',3333,0)
		.chancedOutput('1x gtceu:small_rhodium_dust',3333,0)
		.duration(80)
		.EUt(512)
	//creative oxygen tank
event.shaped(
	Item.of('ad_astra_giselle_addon:creative_oxygen_can', 1), // arg 1: output
	[
		' V ',
		'DAE', // arg 2: the shape (array of strings)
		' C '
	],
	{
		V:'ad_astra:vent',
		C:'ad_astra_giselle_addon:netherite_oxygen_can',
		E:'gtceu:iv_electrolyzer',
		A:'gtceu:iv_gas_collector',
		D:'gtceu:tungsten_steel_drum'
	}
)
});
//rocket fuel edits
ServerEvents.tags('fluid', event => {
  event.removeAll('ad_astra:efficient_fuel');
  event.removeAll('ad_astra:tier_1_rocket_fuel');
  event.removeAll('ad_astra:tier_2_rocket_fuel');
  event.removeAll('ad_astra:tier_3_rocket_fuel');
  event.removeAll('ad_astra:tier_4_rocket_fuel');
  event.add('ad_astra:tier_1_rocket_fuel', '#forge:methane');
  event.add('ad_astra:tier_2_rocket_fuel', '#forge:uranium_235');
  event.add('ad_astra:tier_3_rocket_fuel', '#forge:tritium');
  event.add('ad_astra:tier_4_rocket_fuel', '#forge:nickel_plasma');
});

ServerEvents.tags('item', event => {
  //make a bunch of lategame-ish equipment work as respirators
  event.add('thinair:breathing_equipment', 'ad_astra:space_helmet');
  event.add('thinair:breathing_equipment', 'ad_astra:netherite_space_helmet');
  event.add('thinair:breathing_equipment', 'ad_astra:jet_suit_helmet');
  event.add('thinair:breathing_equipment', 'gtceu:nanomuscle_helmet');
  event.add('thinair:breathing_equipment', 'gtceu:quarktech_helmet');
  event.add('thinair:breathing_equipment', 'avaritia:infinity_helmet');
  //let greg knives harvest straw
  event.add('farmersdelight:straw_harvesters', '#forge:tools/knives');
  //unify flour
  event.add('forge:flour', 'gtceu:wheat_dust');
  //extra circuits
  event.add('gtceu:circuits/zpm', 'kubejs:supracausal_processor');
  event.add('gtceu:circuits/uv', 'kubejs:supracausal_assembly');
  event.add('gtceu:circuits/uhv', 'kubejs:supracausal_supercomputer');
  event.add('gtceu:circuits/uev', 'kubejs:supracausal_mainframe');
  //gregtech axes for no tree punching processing
  event.add('notreepunching:weak_saws','#minecraft:axes');
})

//ore vein stuff
GTCEuServerEvents.oreVeins(event => {
    //Copper
    event.add("kubejs:copper_vein_ow", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
    // Define a height range:
        vein.heightRangeTriangle(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Chalcopyrite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Copper)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
    //Zinc
    event.add("kubejs:zinc_vein_ow", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
    // Define a height range:
        vein.heightRangeTriangle(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Sphalerite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Galena).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(8, 8))
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:andesite')).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sphalerite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
})
