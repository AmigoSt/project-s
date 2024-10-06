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
    var WorldPos = new BABYLON.TransformBlock("WorldPos");
    WorldPos.visibleInInspector = false;
    WorldPos.visibleOnFrame = false;
    WorldPos.target = 1;
    WorldPos.complementZ = 0;
    WorldPos.complementW = 1;

    // InputBlock
    var World = new BABYLON.InputBlock("World");
    World.visibleInInspector = false;
    World.visibleOnFrame = false;
    World.target = 1;
    World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

    // TransformBlock
    var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
    WorldPosViewProjectionTransform.visibleInInspector = false;
    WorldPosViewProjectionTransform.visibleOnFrame = false;
    WorldPosViewProjectionTransform.target = 1;
    WorldPosViewProjectionTransform.complementZ = 0;
    WorldPosViewProjectionTransform.complementW = 1;

    // InputBlock
    var ViewProjection = new BABYLON.InputBlock("ViewProjection");
    ViewProjection.visibleInInspector = false;
    ViewProjection.visibleOnFrame = false;
    ViewProjection.target = 1;
    ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

    // VertexOutputBlock
    var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
    VertexOutput.visibleInInspector = false;
    VertexOutput.visibleOnFrame = false;
    VertexOutput.target = 1;

    // InputBlock
    var uv = new BABYLON.InputBlock("uv");
    uv.visibleInInspector = false;
    uv.visibleOnFrame = false;
    uv.target = 1;
    uv.setAsAttribute("uv");

    // TextureBlock
    var Texture = new BABYLON.TextureBlock("Texture");
    Texture.visibleInInspector = false;
    Texture.visibleOnFrame = false;
    Texture.target = 3;
    Texture.convertToGammaSpace = false;
    Texture.convertToLinearSpace = false;
    Texture.disableLevelMultiplication = false;
    //Texture.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/T_background_v1.jpg", null, false, false, 3);
    Texture.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/t_back_v1.jpg", null, false, false, 3);
    Texture.texture.wrapU = 1;
    Texture.texture.wrapV = 1;
    Texture.texture.uAng = 0;
    Texture.texture.vAng = 0;
    Texture.texture.wAng = 0;
    Texture.texture.uOffset = 0;
    Texture.texture.vOffset = 0;
    Texture.texture.uScale = 1;
    Texture.texture.vScale = 1;
    Texture.texture.coordinatesMode = 7;

    // ImageSourceBlock
    var ImageSource = new BABYLON.ImageSourceBlock("ImageSource");
    ImageSource.visibleInInspector = false;
    ImageSource.visibleOnFrame = false;
    ImageSource.target = 3;
    //ImageSource.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/T_background_v1.jpg", null, false, false, 3);
    ImageSource.texture = new BABYLON.Texture("https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/textures/t_back_v1.jpg", null, false, false, 3);
    ImageSource.texture.wrapU = 1;
    ImageSource.texture.wrapV = 1;
    ImageSource.texture.uAng = 0;
    ImageSource.texture.vAng = 0;
    ImageSource.texture.wAng = 0;
    ImageSource.texture.uOffset = 0;
    ImageSource.texture.vOffset = 0;
    ImageSource.texture.uScale = 1;
    ImageSource.texture.vScale = 1;
    ImageSource.texture.coordinatesMode = 7;

    // FragmentOutputBlock
    var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
    FragmentOutput.visibleInInspector = false;
    FragmentOutput.visibleOnFrame = false;
    FragmentOutput.target = 2;
    FragmentOutput.convertToGammaSpace = false;
    FragmentOutput.convertToLinearSpace = false;
    FragmentOutput.useLogarithmicDepth = false;

    // Connections
    position.output.connectTo(WorldPos.vector);
    World.output.connectTo(WorldPos.transform);
    WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
    ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
    WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
    uv.output.connectTo(Texture.uv);
    ImageSource.source.connectTo(Texture.source);
    Texture.rgba.connectTo(FragmentOutput.rgba);
    // Output nodes
    M_back_v1.addOutputNode(VertexOutput);
    M_back_v1.addOutputNode(FragmentOutput);
    M_back_v1.build();
    window.M_back_v1 = M_back_v1;
}