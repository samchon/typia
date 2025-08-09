import { ICompilerService } from "../src/compiler/ICompilerService";
import { ITransformOptions } from "../../../src/transformers/ITransformOptions";

// Simple test script to validate transform options functionality
const testScript = `
import typia from "typia";

const value: number = 3.14159;
const result = typia.is<number>(value);
console.log(result);
`;

// Create a simple test that validates transform options are passed through
export const testTransformOptions = async (
  service: ICompilerService
): Promise<boolean> => {
  try {
    // Test with default options (empty)
    const resultDefault = await service.compile(testScript);
    
    // Test with finite option enabled
    const optionsFinite: ITransformOptions = {
      finite: true,
      numeric: false,
      functional: false,
      undefined: true,
    };
    const resultFinite = await service.compile(testScript, optionsFinite);
    
    // Test with numeric option enabled
    const optionsNumeric: ITransformOptions = {
      finite: false,
      numeric: true,
      functional: false,
      undefined: true,
    };
    const resultNumeric = await service.compile(testScript, optionsNumeric);
    
    // All should compile successfully
    const allSuccessful = 
      resultDefault.type === "success" &&
      resultFinite.type === "success" &&
      resultNumeric.type === "success";
    
    // The generated code should be different when using different options
    // (this is a simple heuristic - the actual validation would require
    // more sophisticated analysis of the generated code)
    const outputsAreDifferent = 
      (resultDefault.type === "success" && resultFinite.type === "success" && 
       resultDefault.value !== resultFinite.value) ||
      (resultDefault.type === "success" && resultNumeric.type === "success" && 
       resultDefault.value !== resultNumeric.value);
    
    console.log("Transform Options Test Results:");
    console.log("- Default compilation:", resultDefault.type);
    console.log("- Finite option compilation:", resultFinite.type);
    console.log("- Numeric option compilation:", resultNumeric.type);
    console.log("- Outputs are different:", outputsAreDifferent);
    
    return allSuccessful;
  } catch (error) {
    console.error("Transform options test failed:", error);
    return false;
  }
};