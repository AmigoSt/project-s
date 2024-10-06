export function f_M_grid_back_v1() {
    var M_grid_back_v1 = new BABYLON.NodeMaterial("M_grid_back_v1");
    M_grid_back_v1.mode = BABYLON.NodeMaterialModes.Material;

    // InputBlock
    var position = new BABYLON.InputBlock("position");
    position.visibleInInspector = false;
    position.visibleOnFrame = false;
    position.target = 1;
    position.setAsAttribute("position");

    // TransformBlock
    var WorldPos_grid_back = new BABYLON.TransformBlock("WorldPos_grid_back");
    WorldPos_grid_back.visibleInInspector = false;
    WorldPos_grid_back.visibleOnFrame = false;
    WorldPos_grid_back.target = 1;
    WorldPos_grid_back.complementZ = 0;
    WorldPos_grid_back.complementW = 1;

    // InputBlock
    var World_grid_back = new BABYLON.InputBlock("World_grid_back");
    World_grid_back.visibleInInspector = false;
    World_grid_back.visibleOnFrame = false;
    World_grid_back.target = 1;
    World_grid_back.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

    // TransformBlock
    var WorldPosViewProjectionTransform_grid_back = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform_grid_back");
    WorldPosViewProjectionTransform_grid_back.visibleInInspector = false;
    WorldPosViewProjectionTransform_grid_back.visibleOnFrame = false;
    WorldPosViewProjectionTransform_grid_back.target = 1;
    WorldPosViewProjectionTransform_grid_back.complementZ = 0;
    WorldPosViewProjectionTransform_grid_back.complementW = 1;

    // InputBlock
    var ViewProjection_grid_back = new BABYLON.InputBlock("ViewProjection_grid_back");
    ViewProjection_grid_back.visibleInInspector = false;
    ViewProjection_grid_back.visibleOnFrame = false;
    ViewProjection_grid_back.target = 1;
    ViewProjection_grid_back.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

    // VertexOutputBlock
    var VertexOutput_grid_back = new BABYLON.VertexOutputBlock("VertexOutput_grid_back");
    VertexOutput_grid_back.visibleInInspector = false;
    VertexOutput_grid_back.visibleOnFrame = false;
    VertexOutput_grid_back.target = 1;

    // InputBlock
    var uv = new BABYLON.InputBlock("uv");
    uv.visibleInInspector = false;
    uv.visibleOnFrame = false;
    uv.target = 1;
    uv.setAsAttribute("uv");

    // TextureBlock
    var Texture_grid_back = new BABYLON.TextureBlock("Texture_grid_back");
    Texture_grid_back.visibleInInspector = false;
    Texture_grid_back.visibleOnFrame = false;
    Texture_grid_back.target = 3;
    Texture_grid_back.convertToGammaSpace = false;
    Texture_grid_back.convertToLinearSpace = false;
    Texture_grid_back.disableLevelMultiplication = false;
    Texture_grid_back.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/t_back_v1.png", null, false, false, 1);
    Texture_grid_back.texture.wrapU = 1;
    Texture_grid_back.texture.wrapV = 1;
    Texture_grid_back.texture.uAng = 0;
    Texture_grid_back.texture.vAng = 0;
    Texture_grid_back.texture.wAng = 0;
    Texture_grid_back.texture.uOffset = 0;
    Texture_grid_back.texture.vOffset = 0;
    Texture_grid_back.texture.uScale = 1;
    Texture_grid_back.texture.vScale = 1;
    Texture_grid_back.texture.coordinatesMode = 7;

    // ImageSourceBlock
    var ImageSource_grid_back = new BABYLON.ImageSourceBlock("ImageSource_grid_back");
    ImageSource_grid_back.visibleInInspector = false;
    ImageSource_grid_back.visibleOnFrame = false;
    ImageSource_grid_back.target = 3;
    ImageSource_grid_back.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/t_back_v1.png", null, false, false, 1);
    ImageSource_grid_back.texture.wrapU = 1;
    ImageSource_grid_back.texture.wrapV = 1;
    ImageSource_grid_back.texture.uAng = 0;
    ImageSource_grid_back.texture.vAng = 0;
    ImageSource_grid_back.texture.wAng = 0;
    ImageSource_grid_back.texture.uOffset = 0;
    ImageSource_grid_back.texture.vOffset = 0;
    ImageSource_grid_back.texture.uScale = 1;
    ImageSource_grid_back.texture.vScale = 1;
    ImageSource_grid_back.texture.coordinatesMode = 7;

    // FragmentOutputBlock
    var FragmentOutput_grid_back = new BABYLON.FragmentOutputBlock("FragmentOutput_grid_back");
    FragmentOutput_grid_back.visibleInInspector = false;
    FragmentOutput_grid_back.visibleOnFrame = false;
    FragmentOutput_grid_back.target = 2;
    FragmentOutput_grid_back.convertToGammaSpace = false;
    FragmentOutput_grid_back.convertToLinearSpace = false;
    FragmentOutput_grid_back.useLogarithmicDepth = false;

    // Connections
    position.output.connectTo(WorldPos_grid_back.vector);
    World_grid_back.output.connectTo(WorldPos_grid_back.transform);
    WorldPos_grid_back.output.connectTo(WorldPosViewProjectionTransform_grid_back.vector);
    ViewProjection_grid_back.output.connectTo(WorldPosViewProjectionTransform_grid_back.transform);
    WorldPosViewProjectionTransform_grid_back.output.connectTo(VertexOutput_grid_back.vector);
    uv.output.connectTo(Texture_grid_back.uv);
    ImageSource_grid_back.source.connectTo(Texture_grid_back.source);
    Texture_grid_back.rgba.connectTo(FragmentOutput_grid_back.rgba);

    // Output nodes
    M_grid_back_v1.addOutputNode(VertexOutput_grid_back);
    M_grid_back_v1.addOutputNode(FragmentOutput_grid_back);
    M_grid_back_v1.build();
    window.M_grid_back_v1 = M_grid_back_v1;
}