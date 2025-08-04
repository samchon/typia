import typia from "typia";

// Test structure that mimics the MapAlias pattern
export interface TestMapAlias {
  simpleMap: TestMapAlias.SimpleMapType;
}

export namespace TestMapAlias {
  export type SimpleMapType = Map<string, number>;

  export function generate(): TestMapAlias {
    return {
      simpleMap: new Map([
        ["key1", 1],
        ["key2", 2],
      ]),
    };
  }

  export const SPOILERS = [];
}

// Test the validation
const testValue = TestMapAlias.generate();
const validation = typia.validate<TestMapAlias>(testValue);

console.log("Map alias validation test result:", validation.success ? "PASS" : "FAIL");
if (!validation.success) {
  console.log("Validation errors:", validation.errors);
} else {
  console.log("Validation successful, data preserved:", validation.data === testValue);
}