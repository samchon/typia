import { TestValidator } from "@nestia/e2e";
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
    /** Status property */
    status: Status;
    /** Dictionary property */
    dict: Record<string, number>;
    /** Nullable property */
    nn: NonNullable<"a" | "b" | null>;
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

export const test_json_schema_object_description = (): void => {
  const app = typia.json.application<IApplication>();
  const schemas = app.components.schemas ?? {};

  // A named interface used as a nested type must expose its own JSDoc
  // description on the component schema, not only the property comments.
  TestValidator.equals(
    "IProps description",
    descriptionOf(schemas["IApplication.IProps"]),
    "Properties.",
  );
  TestValidator.equals(
    "IPlusProps description",
    descriptionOf(schemas["IApplication.IPlusProps"]),
    "Plus operation properties.",
  );
  TestValidator.equals(
    "IResult description",
    descriptionOf(schemas["IApplication.IResult"]),
    "Result.",
  );

  // A user-defined type alias must expose its own JSDoc description.
  TestValidator.equals(
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
  TestValidator.equals(
    "Record has no library description",
    descriptionOf(schemas[recordKey ?? ""]),
    undefined,
  );
  TestValidator.equals(
    "NonNullable has no library description",
    descriptionOf(schemas[nonNullableKey ?? ""]),
    undefined,
  );

  // Property-level comments must keep working alongside the object description.
  const plus = schemas["IApplication.IPlusProps"] as {
    properties?: Record<string, { description?: string }>;
  };
  TestValidator.equals(
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
  TestValidator.equals(
    "LLM IPlusProps description",
    params.$defs?.["IApplication.IPlusProps"]?.description,
    "Plus operation properties.",
  );
};
