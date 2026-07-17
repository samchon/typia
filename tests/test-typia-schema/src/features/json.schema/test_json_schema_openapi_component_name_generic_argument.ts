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
 *    interface named exactly after the flattened prefix, and a genuinely
 *    merged interface-plus-namespace pair.
 * 2. Assert the flattened key claims no allocated component as a parent and
 *    that its escaped description never mentions the unrelated interface.
 * 3. Assert the real namespace member still inherits its real parent's
 *    description, so the cascade itself is intact.
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
        (root.properties?.[accessor] as
          | OpenApi.IJsonSchema.IReference
          | undefined)?.$ref ?? ""
      )
        .split("/")
        .at(-1)!;
    const describe = (accessor: string): string => {
      const escaped = OpenApiTypeChecker.escape({
        components,
        schema: { $ref: `#/components/schemas/${key(accessor)}` },
        recursive: 1,
      });
      return escaped.success ? (escaped.value?.description ?? "") : "FAILED";
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
