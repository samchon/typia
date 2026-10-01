import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export namespace Ns {
  /** THE INNER PAYLOAD. */
  export interface Inner {
    c: boolean;
  }
}

/** THE GENERIC WRAPPER. */
export interface Gen<T> {
  v: T;
}

/** DANGER: a completely unrelated audit-log record type. */
export interface GenNs {
  unrelated: string;
}

/** MERGED PARENT. */
export interface Merged {
  m: string;
}
export namespace Merged {
  /** MERGED CHILD. */
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
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (the flattened generic key claims no allocated component as a parent; every reference escapes; the flattened generic inherits no unrelated description; the unrelated interface keeps its own description; a real namespace member keeps its own description; a real namespace member still inherits its real parent's description). The case documents its purpose as: Verifies a flattened generic argument never invents a namespace parent.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `JsonDescriptor.cascade` reads every dotted prefix of a component key as a namespace parent and inherits that parent's description, which is the whole point of the `Qualified.Member` behavior the positive control below pins. Name normalization used to delete the angle brackets of `Gen<Ns.Inner>` and leave the argument's own dot behind, so the key `GenNs.Inner` presented the unrelated `GenNs` interface as its parent and pulled that interface's prose into what an LLM reads. This is typia's and nestia's own `IPage<IShoppingSale.ISummary>` idiom, so it needs no contrived naming. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (the flattened generic key claims no allocated component as a parent; every reference escapes; the flattened generic inherits no unrelated description; the unrelated interface keeps its own description; a real namespace member keeps its own description; a real namespace member still inherits its real parent's description) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_openapi_component_name_generic_argument is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
