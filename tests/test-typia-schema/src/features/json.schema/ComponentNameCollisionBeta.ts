/**
 * BETA type: the duplicate `Foo` that forces a disambiguating id.
 *
 * @evidence contracts/testing.md#behavioral-verification This authored fixture supplies the second Foo name and b:number payload; the collision case observes its distinct reference, own member and BETA prose.
 * @evidence contracts/testing.md#independent-expectations The authored name, member b and BETA prose establish the expected identity independently of allocator output.
 * @evidence contracts/testing.md#distinguishing-cases Same-name Alpha has a:string and ALPHA prose, and Gamma owns the potentially colliding Foo.o1 member; this fixture makes no independent verdict.
 * @evidence contracts/testing.md#execution-ownership test_json_schema_openapi_component_name_collision imports this interface as Beta and owns its runtime assertions under DynamicExecutor/schema start.
 */
export interface Foo {
  b: number;
}
