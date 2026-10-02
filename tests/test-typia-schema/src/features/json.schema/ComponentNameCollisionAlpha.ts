/**
 * ALPHA type: the first of three types whose generated component keys collide.
 *
 * The three fixtures deliberately live in separate files: two distinct types
 * must carry the identical declared name `Foo` for the collection to mint a
 * disambiguating id for the second one.
 *
 * @evidence contracts/testing.md#behavioral-verification This authored fixture supplies the first Foo name and a:string payload; test_json_schema_openapi_component_name_collision owns distinct-key, reference-target and description assertions.
 * @evidence contracts/testing.md#independent-expectations Its declared name, member a and ALPHA prose establish literal inputs independently of component allocation.
 * @evidence contracts/testing.md#distinguishing-cases Alpha and Beta share Foo but differ in payload/prose, while Gamma declares the real Foo.o1 namespace member; this fixture owns no standalone assertions.
 * @evidence contracts/testing.md#execution-ownership The native collision case imports this interface as Alpha in IArguments; DynamicExecutor executes that case in the schema start population.
 */
export interface Foo {
  a: string;
}
