import { ConvertGLBtoGltf, ConvertGltfToGLB, ConvertToGLB} from 'gltf-import-export';

const inputGlb = './models/building.glb';
const extractedGltfFilename = './models/building.gltf';

// Perform the conversion; output paths are overwritten
ConvertGLBtoGltf(inputGlb, extractedGltfFilename);
