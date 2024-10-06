import {f_M_grid_v1} from './M_grid_v1.js';
import {f_M_back_v1} from './M_back_v1.js';
import {f_M_grid_targets_v1} from './M_grid_targets_v1.js';
import {f_M_grid_back_v1} from './M_grid_back_v1.js';

var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
let grid_animations_v1 = await BABYLON.Animation.ParseFromFileAsync(null, "./animations/anim_grid_v1.json");





var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions an arc rotate camera (non-mesh)
    //var camera = new BABYLON.ArcRotateCamera("Camera", BABYLON.Tools.ToRadians(-90), BABYLON.Tools.ToRadians(90), 10, new BABYLON.Vector3(0, 0, 0), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", BABYLON.Tools.ToRadians(0), BABYLON.Tools.ToRadians(90), 0, new BABYLON.Vector3(0, 0, 0), scene);      
    //globalThis.debugNode.fov = 0.47;// (debugNode as BABYLON.ArcRotateCamera)
    camera.fov = 0.63;
    camera.attachControl(canvas, false);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;

    // Load a GUI from a URL JSON.
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, scene);
    let loadedGUI = advancedTexture.parseFromURLAsync("./gui/gui_dev_v1.json");
    let btn_devPanel = advancedTexture.getControlByName("btn_devPanels");
    
    if (btn_devPanel != null) {
        btn_devPanel.onPointerClickObservable.add( () => {  
            scene.debugLayer.show();
        });
    }
    
   

    


    //Place Material Here!!!!
    
    f_M_grid_v1();
    f_M_back_v1();
    f_M_grid_targets_v1();
    f_M_grid_back_v1();

    


    
    //// adding object
    var background_box = BABYLON.MeshBuilder.CreateBox("background", {width: 8, height: 4, depth: 0.1 }, scene);
    background_box.position.x = -5;
    background_box.rotation.y = BABYLON.Tools.ToRadians(90);
    background_box.material = M_back_v1;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://raw.githubusercontent.com/AmigoSt/project-s/main/assets/models/", "grid.glb", scene).then((result) => {

        const mesh_grid = scene.getMeshByName("grid");
        mesh_grid.material = M_grid_v1;
        const mesh_grid_back = scene.getMeshByName("grid_back");
        mesh_grid_back.material = M_grid_back_v1;
        const mesh_targets = scene.getMeshByName("grid_targets");
        mesh_targets.material = M_grid_targets_v1;
       
        

        // Grid Animation
        const mesh_grid_root = scene.getMeshByName("__root__");
        //mesh_grid.position.y =10;
        mesh_grid_root.animations = grid_animations_v1;
        scene.beginAnimation(mesh_grid_root, 0, 100, true);



    
    });


    

    return scene;
};

window.initFunction = async function() {
    var asyncEngineCreation = async function() {
        try {
            return createDefaultEngine();
        } catch(e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    engine = await asyncEngineCreation();
    window.engine = engine; 
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    scene = createScene();
    window.scene = scene;
};

initFunction().then(() => {sceneToRender = scene                    
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
