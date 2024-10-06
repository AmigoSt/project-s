//let {f_M_grid_v1} = () => {
export function f_M_grid_v1() {
//function f_M_grid_v1() {

    var M_grid_v1 = new BABYLON.NodeMaterial("M_grid_v1");
    M_grid_v1.mode = BABYLON.NodeMaterialModes.Material;

    // InputBlock
    var position = new BABYLON.InputBlock("position");
    position.visibleInInspector = false;
    position.visibleOnFrame = false;
    position.target = 1;
    position.setAsAttribute("position");

    // TransformBlock
    var WorldPos_grid = new BABYLON.TransformBlock("WorldPos_grid");
    WorldPos_grid.visibleInInspector = false;
    WorldPos_grid.visibleOnFrame = false;
    WorldPos_grid.target = 1;
    WorldPos_grid.complementZ = 0;
    WorldPos_grid.complementW = 1;

    // InputBlock
    var World_grid = new BABYLON.InputBlock("World_grid");
    World_grid.visibleInInspector = false;
    World_grid.visibleOnFrame = false;
    World_grid.target = 1;
    World_grid.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

    // TransformBlock
    var WorldPosViewProjectionTransform_grid = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform_grid");
    WorldPosViewProjectionTransform_grid.visibleInInspector = false;
    WorldPosViewProjectionTransform_grid.visibleOnFrame = false;
    WorldPosViewProjectionTransform_grid.target = 1;
    WorldPosViewProjectionTransform_grid.complementZ = 0;
    WorldPosViewProjectionTransform_grid.complementW = 1;

    // InputBlock
    var ViewProjection_grid = new BABYLON.InputBlock("ViewProjection_grid");
    ViewProjection_grid.visibleInInspector = false;
    ViewProjection_grid.visibleOnFrame = false;
    ViewProjection_grid.target = 1;
    ViewProjection_grid.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

    // VertexOutputBlock
    var VertexOutput_grid = new BABYLON.VertexOutputBlock("VertexOutput_grid");
    VertexOutput_grid.visibleInInspector = false;
    VertexOutput_grid.visibleOnFrame = false;
    VertexOutput_grid.target = 1;

    // InputBlock
    var uv = new BABYLON.InputBlock("uv");
    uv.visibleInInspector = false;
    uv.visibleOnFrame = false;
    uv.target = 1;
    uv.setAsAttribute("uv");

    // TextureBlock
    var Texture_grid = new BABYLON.TextureBlock("Texture_grid");
    Texture_grid.visibleInInspector = false;
    Texture_grid.visibleOnFrame = false;
    Texture_grid.target = 3;
    Texture_grid.convertToGammaSpace = false;
    Texture_grid.convertToLinearSpace = false;
    Texture_grid.disableLevelMultiplication = false;
    Texture_grid.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/t_grid_v1.png", null, false, false, 3);
    Texture_grid.texture.wrapU = 1;
    Texture_grid.texture.wrapV = 1;
    Texture_grid.texture.uAng = 0;
    Texture_grid.texture.vAng = 0;
    Texture_grid.texture.wAng = 0;
    Texture_grid.texture.uOffset = 0;
    Texture_grid.texture.vOffset = 0;
    Texture_grid.texture.uScale = 1;
    Texture_grid.texture.vScale = 1;
    Texture_grid.texture.coordinatesMode = 7;

    // ImageSourceBlock
    var ImageSource_grid = new BABYLON.ImageSourceBlock("ImageSource_grid");
    ImageSource_grid.visibleInInspector = false;
    ImageSource_grid.visibleOnFrame = false;
    ImageSource_grid.target = 3;
    ImageSource_grid.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/t_grid_v1.png", null, false, false, 3);
    ImageSource_grid.texture.wrapU = 1;
    ImageSource_grid.texture.wrapV = 1;
    ImageSource_grid.texture.uAng = 0;
    ImageSource_grid.texture.vAng = 0;
    ImageSource_grid.texture.wAng = 0;
    ImageSource_grid.texture.uOffset = 0;
    ImageSource_grid.texture.vOffset = 0;
    ImageSource_grid.texture.uScale = 1;
    ImageSource_grid.texture.vScale = 1;
    ImageSource_grid.texture.coordinatesMode = 7;

    // FragmentOutputBlock
    var FragmentOutput_grid = new BABYLON.FragmentOutputBlock("FragmentOutput_grid");
    FragmentOutput_grid.visibleInInspector = false;
    FragmentOutput_grid.visibleOnFrame = false;
    FragmentOutput_grid.target = 2;
    FragmentOutput_grid.convertToGammaSpace = false;
    FragmentOutput_grid.convertToLinearSpace = false;
    FragmentOutput_grid.useLogarithmicDepth = false;

    // Connections
    position.output.connectTo(WorldPos_grid.vector);
    World_grid.output.connectTo(WorldPos_grid.transform);
    WorldPos_grid.output.connectTo(WorldPosViewProjectionTransform_grid.vector);
    ViewProjection_grid.output.connectTo(WorldPosViewProjectionTransform_grid.transform);
    WorldPosViewProjectionTransform_grid.output.connectTo(VertexOutput_grid.vector);
    uv.output.connectTo(Texture_grid.uv);
    ImageSource_grid.source.connectTo(Texture_grid.source);
    Texture_grid.rgba.connectTo(FragmentOutput_grid.rgba);

    // Output nodes
    M_grid_v1.addOutputNode(VertexOutput_grid);
    M_grid_v1.addOutputNode(FragmentOutput_grid);
    M_grid_v1.build();
    window.M_grid_v1 = M_grid_v1;
}

//export default f_M_grid_v1;