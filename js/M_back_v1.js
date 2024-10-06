export function f_M_back_v1() {
    var M_back_v1 = new BABYLON.NodeMaterial("M_back_v1");
    M_back_v1.mode = BABYLON.NodeMaterialModes.Material;

    // InputBlock
    var position = new BABYLON.InputBlock("position");
    position.visibleInInspector = false;
    position.visibleOnFrame = false;
    position.target = 1;
    position.setAsAttribute("position");

    // TransformBlock
    var WorldPos_background = new BABYLON.TransformBlock("WorldPos_background");
    WorldPos_background.visibleInInspector = false;
    WorldPos_background.visibleOnFrame = false;
    WorldPos_background.target = 1;
    WorldPos_background.complementZ = 0;
    WorldPos_background.complementW = 1;

    // InputBlock
    var World_background = new BABYLON.InputBlock("World_background");
    World_background.visibleInInspector = false;
    World_background.visibleOnFrame = false;
    World_background.target = 1;
    World_background.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

    // TransformBlock
    var WorldPosViewProjectionTransform_background = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform_background");
    WorldPosViewProjectionTransform_background.visibleInInspector = false;
    WorldPosViewProjectionTransform_background.visibleOnFrame = false;
    WorldPosViewProjectionTransform_background.target = 1;
    WorldPosViewProjectionTransform_background.complementZ = 0;
    WorldPosViewProjectionTransform_background.complementW = 1;

    // InputBlock
    var ViewProjection_background = new BABYLON.InputBlock("ViewProjection_background");
    ViewProjection_background.visibleInInspector = false;
    ViewProjection_background.visibleOnFrame = false;
    ViewProjection_background.target = 1;
    ViewProjection_background.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

    // VertexOutputBlock
    var VertexOutput_background = new BABYLON.VertexOutputBlock("VertexOutput_background");
    VertexOutput_background.visibleInInspector = false;
    VertexOutput_background.visibleOnFrame = false;
    VertexOutput_background.target = 1;

    // InputBlock
    var uv = new BABYLON.InputBlock("uv");
    uv.visibleInInspector = false;
    uv.visibleOnFrame = false;
    uv.target = 1;
    uv.setAsAttribute("uv");

    // TextureBlock
    var Texture_background = new BABYLON.TextureBlock("Texture_background");
    Texture_background.visibleInInspector = false;
    Texture_background.visibleOnFrame = false;
    Texture_background.target = 3;
    Texture_background.convertToGammaSpace = false;
    Texture_background.convertToLinearSpace = false;
    Texture_background.disableLevelMultiplication = false;
    Texture_background.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/T_background_v1.jpg", null, false, false, 3);
    Texture_background.texture.wrapU = 1;
    Texture_background.texture.wrapV = 1;
    Texture_background.texture.uAng = 0;
    Texture_background.texture.vAng = 0;
    Texture_background.texture.wAng = 0;
    Texture_background.texture.uOffset = 0;
    Texture_background.texture.vOffset = 0;
    Texture_background.texture.uScale = 1;
    Texture_background.texture.vScale = 1;
    Texture_background.texture.coordinatesMode = 7;

    // ImageSourceBlock
    var ImageSource_background = new BABYLON.ImageSourceBlock("ImageSource_background");
    ImageSource_background.visibleInInspector = false;
    ImageSource_background.visibleOnFrame = false;
    ImageSource_background.target = 3;
    ImageSource_background.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/T_background_v1.jpg", null, false, false, 3);
    ImageSource_background.texture.wrapU = 1;
    ImageSource_background.texture.wrapV = 1;
    ImageSource_background.texture.uAng = 0;
    ImageSource_background.texture.vAng = 0;
    ImageSource_background.texture.wAng = 0;
    ImageSource_background.texture.uOffset = 0;
    ImageSource_background.texture.vOffset = 0;
    ImageSource_background.texture.uScale = 1;
    ImageSource_background.texture.vScale = 1;
    ImageSource_background.texture.coordinatesMode = 7;

    // FragmentOutputBlock
    var FragmentOutput_background = new BABYLON.FragmentOutputBlock("FragmentOutput_background");
    FragmentOutput_background.visibleInInspector = false;
    FragmentOutput_background.visibleOnFrame = false;
    FragmentOutput_background.target = 2;
    FragmentOutput_background.convertToGammaSpace = false;
    FragmentOutput_background.convertToLinearSpace = false;
    FragmentOutput_background.useLogarithmicDepth = false;

    // Connections
    position.output.connectTo(WorldPos_background.vector);
    World_background.output.connectTo(WorldPos_background.transform);
    WorldPos_background.output.connectTo(WorldPosViewProjectionTransform_background.vector);
    ViewProjection_background.output.connectTo(WorldPosViewProjectionTransform_background.transform);
    WorldPosViewProjectionTransform_background.output.connectTo(VertexOutput_background.vector);
    uv.output.connectTo(Texture_background.uv);
    ImageSource_background.source.connectTo(Texture_background.source);
    Texture_background.rgba.connectTo(FragmentOutput_background.rgba);

    // Output nodes
    M_back_v1.addOutputNode(VertexOutput_background);
    M_back_v1.addOutputNode(FragmentOutput_background);
    M_back_v1.build();
    window.M_back_v1 = M_back_v1;
}