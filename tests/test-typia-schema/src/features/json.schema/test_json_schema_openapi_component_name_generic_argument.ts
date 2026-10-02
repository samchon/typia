import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Provides the actual qualification in the generic argument fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification This namespace supplies Ns.Inner to Gen; the exported generic-argument case owns descriptor-resolution and ancestry assertions.
 * @evidence contracts/testing.md#independent-expectations The source qualification Ns.Inner is an authored naming input, not a generated component-name expectation.
 * @evidence contracts/testing.md#distinguishing-cases Qualification inside a generic argument contrasts with the genuine Merged.Child namespace relation and the unrelated GenNs type.
 * @evidence contracts/testing.md#execution-ownership IArguments references Gen<Ns.Inner> in the native generic-argument case under DynamicExecutor/schema start; Ns has no standalone assertions.
 */
export namespace Ns {
  /**
   * THE INNER PAYLOAD.
   *
   * @evidence contracts/testing.md#behavioral-verification This boolean-payload fixture is the qualified argument of Gen; the generic-argument case checks that its name cannot invent a GenNs parent.
   * @evidence contracts/testing.md#independent-expectations The declared Ns.Inner qualification and c:boolean member are source inputs independent of component naming.
   * @evidence contracts/testing.md#distinguishing-cases A qualified argument belongs inside the generic instance, while Merged.Child is a real namespace member and GenNs is unrelated.
   * @evidence contracts/testing.md#execution-ownership test_json_schema_openapi_component_name_generic_argument generates IArguments containing Gen<Ns.Inner> and owns every runtime assertion.
   */
  export interface Inner {
    c: boolean;
  }
}

/**
 * THE GENERIC WRAPPER.
 *
 * @evidence contracts/testing.md#behavioral-verification This fixture carries its argument in v; the generic-argument case observes flattened naming and absence of unrelated descriptor ancestry.
 * @evidence contracts/testing.md#independent-expectations Gen's source name and v:T relationship establish native metadata inputs independently of generated naming.
 * @evidence contracts/testing.md#distinguishing-cases Gen<Ns.Inner> contrasts with the unrelated GenNs name and genuine Merged.Child ancestry.
 * @evidence contracts/testing.md#execution-ownership The exported generic-argument case references this fixture through IArguments and executes its descriptor assertions in the shared native suite.
 */
export interface Gen<T> {
  v: T;
}

/**
 * DANGER: a completely unrelated audit-log record type.
 *
 * @evidence contracts/testing.md#behavioral-verification This authored occupied-name/prose fixture makes accidental GenNs ancestry observable; the generic-argument case checks own prose and anti-leak behavior.
 * @evidence contracts/testing.md#independent-expectations GenNs and its DANGER prose are fixed source inputs, not derived from the allocator's flattening result.
 * @evidence contracts/testing.md#distinguishing-cases GenNs is unrelated to Gen<Ns.Inner>, whereas Merged is the actual parent of Merged.Child.
 * @evidence contracts/testing.md#execution-ownership IArguments includes this fixture separately; test_json_schema_openapi_component_name_generic_argument owns resolution/prose comparisons under DynamicExecutor.
 */
export interface GenNs {
  unrelated: string;
}

/**
 * MERGED PARENT.
 *
 * @evidence contracts/testing.md#behavioral-verification The merged interface/namespace supplies the positive descriptor-ancestry control; its member must inherit MERGED PARENT while retaining MERGED CHILD.
 * @evidence contracts/testing.md#independent-expectations Declaration merging and authored parent/child prose establish the expected genuine relationship independently of generated component keys.
 * @evidence contracts/testing.md#distinguishing-cases Genuine Merged.Child inheritance contrasts with the forbidden inferred relationship between Gen<Ns.Inner> and GenNs.
 * @evidence contracts/testing.md#execution-ownership IArguments includes both Merged and Merged.Child; the generic-argument case owns their descriptor comparisons under the native schema runner.
 */
export interface Merged {
  m: string;
}
export namespace Merged {
  /**
   * MERGED CHILD.
   *
   * @evidence contracts/testing.md#behavioral-verification This real namespace member supplies the positive parent-prose inheritance observation in the generic-argument case.
   * @evidence contracts/testing.md#independent-expectations Its actual Merged.Child qualification and authored child/parent comments establish expected ancestry independently of the allocator.
   * @evidence contracts/testing.md#distinguishing-cases Genuine member inheritance must survive while generic argument flattening must not invent a GenNs parent.
   * @evidence contracts/testing.md#execution-ownership test_json_schema_openapi_component_name_generic_argument references this member through IArguments and owns the runtime prose assertions.
   */
  export interface Child {
    n: string;
  }
}

interface IArguments {
  flattened: Gen<Ns.Inner>;
  unrelated: GenNs;
  parent: Merged;
  member: Merged.Child;
}

/**
 * Verifies a flattened generic argument never invents a namespace parent.
 *
 * `JsonDescriptor.cascade` reads every dotted prefix of a component key as a
 * namespace parent and inherits that parent's description, which is the whole
 * point of the `Qualified.Member` behavior the positive control below pins.
 * Name normalization used to delete the angle brackets of `Gen<Ns.Inner>` and
 * leave the argument's own dot behind, so the key `GenNs.Inner` presented the
 * unrelated `GenNs` interface as its parent and pulled that interface's prose
 * into what an LLM reads. This is typia's and nestia's own
 * `IPage<IShoppingSale.ISummary>` idiom, so it needs no contrived naming.
 *
 * 1. Reference a generic instantiated with a qualified argument, an unrelated
 *    interface named exactly after the flattened prefix, and a genuinely merged
 *    interface-plus-namespace pair.
 * 2. Assert every reference escapes, that the flattened key claims no allocated
 *    component as a parent, and that its escaped description never mentions the
 *    unrelated interface.
 * 3. Assert the real namespace member still inherits its real parent's
 *    description, so the cascade itself is intact.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that qualified generic arguments cannot invent namespace parents while real namespace members keep inherited prose.
 * @evidence contracts/testing.md#independent-expectations The authored DANGER/MERGED PARENT/MERGED CHILD comments and successful resolution controls distinguish legal inheritance from invented ancestry.
 * @evidence contracts/testing.md#distinguishing-cases Flattened Gen<Ns.Inner>, unrelated GenNs and genuine Merged.Child retain their positive and negative description comparisons.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_openapi_component_name_generic_argument through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native generic naming must reach the descriptor with real qualification boundaries distinguished from argument content. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Flattened Gen<Ns.Inner>, unrelated GenNs and genuine Merged.Child retain their positive and negative description comparisons. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_openapi_component_name_generic_argument =
  (): void => {
    const collection = typia.json.schema<IArguments, "3.1">();
    const components: OpenApi.IComponents =
      collection.components as OpenApi.IComponents;
    const schemas: Record<string, OpenApi.IJsonSchema> =
      components.schemas ?? {};
    const root = collection.schema as OpenApi.IJsonSchema.IObject;

    const key = (accessor: string): string =>
      (
        (
          root.properties?.[accessor] as
            | OpenApi.IJsonSchema.IReference
            | undefined
        )?.$ref ?? ""
      )
        .split("/")
        .at(-1)!;
    const describe = (accessor: string): string => {
      const escaped = OpenApiTypeChecker.escape({
        components,
        schema: { $ref: `#/components/schemas/${key(accessor)}` },
        recursive: 1,
      });
      return escaped.success ? (escaped.value?.description ?? "") : FAILED;
    };

    // 1. THE FLATTENED KEY OWNS NO ALLOCATED PARENT
    const flattened: string = key("flattened");
    TestValidator.predicate(
      "the flattened generic key claims no allocated component as a parent",
      () =>
        flattened
          .split(".")
          .slice(0, -1)
          .map((_, i, array) => array.slice(0, i + 1).join("."))
          .every(
            (parent) =>
              Object.prototype.hasOwnProperty.call(schemas, parent) === false,
          ),
    );

    // 2. AND INHERITS NO UNRELATED PROSE
    //
    // Resolution is asserted first: "inherits no unrelated description" is a
    // negative, and a reference that stopped escaping at all would satisfy it
    // without meaning anything.
    TestValidator.predicate("every reference escapes", () =>
      ["flattened", "unrelated", "parent", "member"].every(
        (accessor) => describe(accessor) !== FAILED,
      ),
    );
    TestValidator.predicate(
      "the flattened generic inherits no unrelated description",
      () => describe("flattened").includes("DANGER") === false,
    );
    TestValidator.predicate(
      "the unrelated interface keeps its own description",
      () => describe("unrelated").includes("DANGER"),
    );

    // 3. A REAL NAMESPACE MEMBER STILL INHERITS ITS REAL PARENT
    TestValidator.predicate(
      "a real namespace member keeps its own description",
      () => describe("member").includes("MERGED CHILD"),
    );
    TestValidator.predicate(
      "a real namespace member still inherits its real parent's description",
      () => describe("member").includes("MERGED PARENT"),
    );
  };

const FAILED = "<the reference did not escape>";
