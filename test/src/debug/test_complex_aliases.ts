import typia from "typia";

// Test multiple levels of type aliases for Map
type BaseMap = Map<string, number>;
type AliasedMap = BaseMap;
type NestedAlias = Map<string, AliasedMap>;

// Test complex Set aliases too since we fixed Set as well
type BaseSet = Set<string>;
type AliasedSet = BaseSet;

const mapValue: AliasedMap = new Map([["test", 42]]);
const nestedMapValue: NestedAlias = new Map([["outer", new Map([["inner", 123]])]]);
const setValue: AliasedSet = new Set(["a", "b", "c"]);

console.log("Testing complex Map and Set aliases...");

try {
    const mapValidation = typia.validate<AliasedMap>(mapValue);
    console.log("✓ Aliased Map validation:", mapValidation.success ? "PASS" : "FAIL");
    
    const nestedMapValidation = typia.validate<NestedAlias>(nestedMapValue);
    console.log("✓ Nested Map alias validation:", nestedMapValidation.success ? "PASS" : "FAIL");
    
    const setValidation = typia.validate<AliasedSet>(setValue);
    console.log("✓ Aliased Set validation:", setValidation.success ? "PASS" : "FAIL");
    
} catch (e) {
    console.log("✗ Error during complex alias tests:", e);
}

console.log("Complex alias test completed.");