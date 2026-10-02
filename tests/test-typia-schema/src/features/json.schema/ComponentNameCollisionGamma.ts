/**
 * Supplies a real namespace member that can collide with a minted duplicate id.
 *
 * @evidence contracts/testing.md#behavioral-verification Foo.o1 is an authored native input to the collision case; the namespace itself performs no assertion or runtime operation.
 * @evidence contracts/testing.md#independent-expectations The qualified name Foo.o1 and its c:boolean member originate in source, independently of the allocator's generated suffix.
 * @evidence contracts/testing.md#distinguishing-cases This real namespace contrasts with the unrelated same-named Alpha/Beta interfaces whose duplicate id must not replace it.
 * @evidence contracts/testing.md#execution-ownership The collision case imports this namespace as Gamma and generates IArguments containing Gamma.o1 under the existing native suite host.
 */
export namespace Foo {
  /**
   * GAMMA type: a real namespace member whose full name is exactly `Foo.o1`.
   *
   * The member name `o1` is not contrived decoration. It is the shape the
   * collection's own disambiguator mints for a duplicate `Foo`, so this type
   * proves whether an invented id can squat a name a real type already owns.
   *
   * @evidence contracts/testing.md#behavioral-verification The collision case checks that this real Foo.o1 type has its own component/reference and c member; the interface is fixture input, not a standalone test.
   * @evidence contracts/testing.md#independent-expectations The declared qualified name and c:boolean payload establish identity independently of component allocation.
   * @evidence contracts/testing.md#distinguishing-cases Its qualified name contrasts with two unqualified Foo declarations while all three payload properties differ.
   * @evidence contracts/testing.md#execution-ownership test_json_schema_openapi_component_name_collision imports Gamma.o1 and owns the four-component and three-target assertions in DynamicExecutor/schema start.
   */
  export interface o1 {
    c: boolean;
  }
}
