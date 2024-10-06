export function f_M_grid_targets_v1() {
    var M_grid_targets_v1 = new BABYLON.NodeMaterial("M_grid_targets_v1");
    M_grid_targets_v1.mode = BABYLON.NodeMaterialModes.Material;
    
    // InputBlock
    var position = new BABYLON.InputBlock("position");
    position.visibleInInspector = false;
    position.visibleOnFrame = false;
    position.target = 1;
    position.setAsAttribute("position");

    // TransformBlock
    var WorldPos_grid_targets = new BABYLON.TransformBlock("WorldPos_grid_targets");
    WorldPos_grid_targets.visibleInInspector = false;
    WorldPos_grid_targets.visibleOnFrame = false;
    WorldPos_grid_targets.target = 1;
    WorldPos_grid_targets.complementZ = 0;
    WorldPos_grid_targets.complementW = 1;

    // InputBlock
    var World_grid_targets = new BABYLON.InputBlock("World_grid_targets");
    World_grid_targets.visibleInInspector = false;
    World_grid_targets.visibleOnFrame = false;
    World_grid_targets.target = 1;
    World_grid_targets.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

    // TransformBlock
    var WorldPosViewProjectionTransform_grid_targets = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform_grid_targets");
    WorldPosViewProjectionTransform_grid_targets.visibleInInspector = false;
    WorldPosViewProjectionTransform_grid_targets.visibleOnFrame = false;
    WorldPosViewProjectionTransform_grid_targets.target = 1;
    WorldPosViewProjectionTransform_grid_targets.complementZ = 0;
    WorldPosViewProjectionTransform_grid_targets.complementW = 1;

    // InputBlock
    var ViewProjection_grid_targets = new BABYLON.InputBlock("ViewProjection_grid_targets");
    ViewProjection_grid_targets.visibleInInspector = false;
    ViewProjection_grid_targets.visibleOnFrame = false;
    ViewProjection_grid_targets.target = 1;
    ViewProjection_grid_targets.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

    // VertexOutputBlock
    var VertexOutput_grid_targets = new BABYLON.VertexOutputBlock("VertexOutput_grid_targets");
    VertexOutput_grid_targets.visibleInInspector = false;
    VertexOutput_grid_targets.visibleOnFrame = false;
    VertexOutput_grid_targets.target = 1;

    // InputBlock
    var fullTransparent_grid_targets = new BABYLON.InputBlock("fullTransparent_grid_targets");
    fullTransparent_grid_targets.visibleInInspector = false;
    fullTransparent_grid_targets.visibleOnFrame = false;
    fullTransparent_grid_targets.target = 1;
    fullTransparent_grid_targets.value = new BABYLON.Color4(1, 1, 1, 0);
    fullTransparent_grid_targets.isConstant = false;

    // FragmentOutputBlock
    var FragmentOutput_grid_targets = new BABYLON.FragmentOutputBlock("FragmentOutput_grid_targets");
    FragmentOutput_grid_targets.visibleInInspector = false;
    FragmentOutput_grid_targets.visibleOnFrame = false;
    FragmentOutput_grid_targets.target = 2;
    FragmentOutput_grid_targets.convertToGammaSpace = false;
    FragmentOutput_grid_targets.convertToLinearSpace = false;
    FragmentOutput_grid_targets.useLogarithmicDepth = false;

    // Connections
    position.output.connectTo(WorldPos_grid_targets.vector);
    World_grid_targets.output.connectTo(WorldPos_grid_targets.transform);
    WorldPos_grid_targets.output.connectTo(WorldPosViewProjectionTransform_grid_targets.vector);
    ViewProjection_grid_targets.output.connectTo(WorldPosViewProjectionTransform_grid_targets.transform);
    WorldPosViewProjectionTransform_grid_targets.output.connectTo(VertexOutput_grid_targets.vector);
    fullTransparent_grid_targets.output.connectTo(FragmentOutput_grid_targets.rgba);

    // Output nodes
    M_grid_targets_v1.addOutputNode(VertexOutput_grid_targets);
    M_grid_targets_v1.addOutputNode(FragmentOutput_grid_targets);
    M_grid_targets_v1.build();
    window.M_grid_targets_v1 = M_grid_targets_v1;
}