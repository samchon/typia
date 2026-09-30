import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/** Application. */
interface IApplication {
  /** Plus operation. */
  plus(p: IApplication.IProps): IApplication.IResult;
}
namespace IApplication {
  /** Properties. */
  export interface IProps {
    input: IPlusProps;
    deep: IProps.IDeep;
    plain: IProps.IPlain;
    /** Status property */
    status: Status;
    /** Dictionary property */
    dict: Record<string, number>;
    /** Nullable property */
    nn: NonNullable<"a" | "b" | null>;
  }

  export namespace IProps {
    /** Deep properties. */
    export interface IDeep {
      z: number;
    }

    export interface IPlain {
      x: number;
    }
  }

  /** Plus operation properties. */
  export interface IPlusProps {
    /** X coordinate. */
    x: number;

    /** Y coordinate. */
    y: number;
  }

  /** Result. */
  export interface IResult {
    z: number;
  }
}

/** Status union alias. */
type Status = "active" | "inactive";

const descriptionOf = (schema: unknown): string | undefined =>
  (schema as { description?: string } | undefined)?.description;

/**
 * Verifies native type and property prose reaches JSON and LLM schemas.
 *
 * Description extraction must preserve user provenance without leaking library
 * prose. Qualified references must resolve through two namespace levels both
 * with and without descriptions; portable reference conversion is tested with
 * authored schemas in the direct utility population.
 *
 * 1. Generate JSON and LLM applications for the same declared operation graph.
 * 2. Retain user type/property descriptions and reject library prose leakage.
 * 3. Compare deeply qualified references and numeric targets with independent
 *    literals, including a target with no description.
 *
 * @evidence contracts/testing.md#behavioral-verification Actual typia.json.application and typia.llm.application output must retain the original user/interface/alias/property descriptions and library anti-leak distinctions. Added deep/plain targets verify three-part qualified names, numeric fields and documented versus undocumented provenance without allowing a missing component to pass an absence assertion.
 * @evidence contracts/testing.md#independent-expectations Declared IApplication/IProps/IDeep/IPlain names, z/x numeric fields and separately authored description strings establish expected pointers and values independently of both emitters. Existing source-prose expectations remain; new direct pointer and field comparisons do not take one generated model as the other's oracle.
 * @evidence contracts/testing.md#distinguishing-cases User interfaces, an alias, property prose and documented standard-library types retain the original distinctions. Deep documented and plain undocumented components share two namespace levels but have independent existence, field and description assertions. Direct utility cases own descriptor conversion and malformed references, rather than this case duplicating their spelling matrix.
 * @evidence contracts/testing.md#execution-ownership test-typia-schema start discovers this matching export through DynamicExecutor and the actual ttsx native typia producer. The private descriptionOf helper only extracts a value for independent comparisons; namespace fixture declarations are native input rather than executable assertions. Portable converter/reference decisions execute in test-utils-unit.
 * @evidence contracts/e2e.md#necessary-boundary TypeScript declarations and JSDoc must reach both native JSON application and LLM application output with resolvable qualified targets. Authored utility schemas cannot detect a native declaration lookup, qualification, documentation extraction or emitted reference-binding defect.
 * @evidence contracts/e2e.md#shared-execution Both applications and all namespace/prose distinctions run in this existing suite case under one native producer/host and workspace content-addressed artifact cache. No installation, Go build or host is added for each field or qualification level.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The JSON and LLM producers each populate their own output graph from immutable declarations; no generated output supplies another expectation. The existing runner/compiler owns the shared host and cache lifetime. This case creates no process, mutable fixture directory or external resource and asserts no cold-cache transition.
 * @evidence contracts/e2e.md#preserved-coverage Every original description and anti-leak assertion remains in this native case. The former utility namespace/name producer fixtures' meaningful qualification and description-presence distinctions remain here with stronger three-part pointer/target checks; their portable conversion/reference assertions retain their original names in test-utils-unit. Native tag and union generation remain in their existing schema matrices.
 */
export const test_json_schema_object_description = (): void => {
  const app = typia.json.application<IApplication>();
  const schemas = app.components.schemas ?? {};

  // A named interface used as a nested type must expose its own JSDoc
  // description on the component schema, not only the property comments.
  TestEquality.equals(
    "IProps description",
    descriptionOf(schemas["IApplication.IProps"]),
    "Properties.",
  );
  TestEquality.equals(
    "IPlusProps description",
    descriptionOf(schemas["IApplication.IPlusProps"]),
    "Plus operation properties.",
  );
  TestEquality.equals(
    "IResult description",
    descriptionOf(schemas["IApplication.IResult"]),
    "Result.",
  );

  // A user-defined type alias must expose its own JSDoc description.
  TestEquality.equals(
    "Status alias description",
    descriptionOf(schemas["Status"]),
    "Status union alias.",
  );

  // Standard-library utility types must NOT leak their own JSDoc
  // (e.g. Record's "Construct a type ...", NonNullable's "Exclude null ...").
  // Locate the components first so the anti-leak assertion cannot pass vacuously
  // when the naming changes.
  const recordKey = Object.keys(schemas).find((k) => k.startsWith("Record"));
  const nonNullableKey = Object.keys(schemas).find((k) =>
    k.startsWith("NonNullable"),
  );
  TestValidator.predicate(
    "Record component exists",
    () => recordKey !== undefined,
  );
  TestValidator.predicate(
    "NonNullable component exists",
    () => nonNullableKey !== undefined,
  );
  TestEquality.equals(
    "Record has no library description",
    descriptionOf(schemas[recordKey ?? ""]),
    undefined,
  );
  TestEquality.equals(
    "NonNullable has no library description",
    descriptionOf(schemas[nonNullableKey ?? ""]),
    undefined,
  );

  // Property-level comments must keep working alongside the object description.
  const plus = schemas["IApplication.IPlusProps"] as {
    properties?: Record<string, { description?: string }>;
  };
  TestEquality.equals(
    "x property description",
    plus.properties?.x?.description,
    "X coordinate.",
  );

  // The same descriptions must also reach the LLM function-calling schema,
  // which was the originally reported entry point.
  const llm = typia.llm.application<IApplication>();
  const params = llm.functions[0]?.parameters as {
    $defs?: Record<string, { description?: string }>;
  };
  TestEquality.equals(
    "LLM IPlusProps description",
    params.$defs?.["IApplication.IPlusProps"]?.description,
    "Plus operation properties.",
  );

  const jsonProps = schemas["IApplication.IProps"] as {
    properties?: Record<string, { $ref?: string }>;
  };
  TestEquality.equals(
    "JSON deep reference",
    jsonProps.properties?.deep?.$ref,
    "#/components/schemas/IApplication.IProps.IDeep",
  );
  TestEquality.equals(
    "JSON plain reference",
    jsonProps.properties?.plain?.$ref,
    "#/components/schemas/IApplication.IProps.IPlain",
  );
  for (const [name, field, description] of [
    ["IApplication.IProps.IDeep", "z", "Deep properties."],
    ["IApplication.IProps.IPlain", "x", undefined],
  ] as const) {
    const jsonTarget = schemas[name] as
      | {
          type?: string;
          properties?: Record<string, unknown>;
          required?: string[];
        }
      | undefined;
    TestEquality.equals(name + " JSON type", jsonTarget?.type, "object");
    TestEquality.equals(name + " JSON field", jsonTarget?.properties?.[field], {
      type: "number",
    });
    TestEquality.equals(name + " JSON required", jsonTarget?.required, [field]);
    TestEquality.equals(
      name + " JSON description",
      descriptionOf(jsonTarget),
      description,
    );

    const llmDefs = llm.functions[0]?.parameters.$defs;
    const llmProps = llm.functions[0]?.parameters as
      | {
          properties?: Record<string, { $ref?: string }>;
        }
      | undefined;
    TestEquality.equals(
      name + " LLM reference",
      llmProps?.properties?.[field === "z" ? "deep" : "plain"]?.$ref,
      "#/$defs/" + name,
    );
    const llmTarget = llmDefs?.[name] as
      | {
          type?: string;
          properties?: Record<string, unknown>;
          required?: string[];
        }
      | undefined;
    TestEquality.equals(name + " LLM type", llmTarget?.type, "object");
    TestEquality.equals(name + " LLM field", llmTarget?.properties?.[field], {
      type: "number",
    });
    TestEquality.equals(name + " LLM required", llmTarget?.required, [field]);
    TestEquality.equals(
      name + " LLM description",
      descriptionOf(llmTarget),
      description,
    );
  }
};
