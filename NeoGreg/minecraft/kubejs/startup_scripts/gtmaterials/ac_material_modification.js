GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

   const $ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');
   import com.gregtechceu.gtceu.api.item.tool.GTToolType;

   import gregtech.api.GregTechAPI.MaterialEvent
   import gregtech.api.unification.material.Material
//tool edits

   
   GTMaterials.get('flint').getProperty(PropertyKey.TOOL).setHarvestLevel(0) //make flint equivalent to wood tools
   GTMaterials.get('copper').setProperty(PropertyKey.TOOL, new $ToolProperty()) //copper tools with stone harvest level
   GTMaterials.get('copper').getProperty(PropertyKey.TOOL).setHarvestLevel(1)
   GTMaterials.get('copper').getProperty(PropertyKey.TOOL).setDurability(210)
   GTMaterials.get('copper').getProperty(PropertyKey.TOOL).setHarvestSpeed(1.5)
   GTMaterials.get('copper').getProperty(PropertyKey.TOOL).removeTypes(GTToolType.SOFT_MALLET,GTToolType.SHEARS,GTToolType.PLUNGER)

   GTMaterials.get('infinity').setProperty(PropertyKey.TOOL, new $ToolProperty()) //infinity tools
   GTMaterials.get('infinity').getProperty(PropertyKey.TOOL).setHarvestLevel(6)
   GTMaterials.get('infinity').getProperty(PropertyKey.TOOL).setUnbreakable(true)
   GTMaterials.get('infinity').getProperty(PropertyKey.TOOL).setMagnetic(true)
   GTMaterials.get('infinity').getProperty(PropertyKey.TOOL).setHarvestSpeed(99999999)
   GTMaterials.get('infinity').getProperty(PropertyKey.TOOL).removeTypes(GTToolType.SOFT_MALLET,GTToolType.SHEARS,GTToolType.PLUNGER)

//Byproducts
    
   GTMaterials.get('calorite').getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Trinium,GTMaterials.Trinium,GTMaterials.Trinium)
   GTMaterials.get('ostrum').getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Tungsten,GTMaterials.Tungsten,GTMaterials.Tungsten)
   GTMaterials.get('desh').getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Rutile,GTMaterials.Rutile,GTMaterials.Rutile)

//Ingots
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_ingot'))

//Blocks
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_block'))

//Nuggets
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_nugget'))

//Plates
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_plate'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_plate'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_plate'))
})
