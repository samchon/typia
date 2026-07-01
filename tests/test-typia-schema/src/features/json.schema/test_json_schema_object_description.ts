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

export const test_json_schema_object_description = (): void => {
  // A named interface used as a nested type must expose its own JSDoc
  // description on the component schema, not only the property comments.
  const app = typia.json.application<IApplication>();
  const schemas = app.components.schemas ?? {};

  const props = schemas["IApplication.IProps"];
  const plus = schemas["IApplication.IPlusProps"];
  const result = schemas["IApplication.IResult"];

  TestValidator.equals(
    "IProps description",
    (props as { description?: string })?.description,
    "Properties.",
  );
  TestValidator.equals(
    "IPlusProps description",
    (plus as { description?: string })?.description,
    "Plus operation properties.",
  );
  TestValidator.equals(
    "IResult description",
    (result as { description?: string })?.description,
    "Result.",
  );

  // Property-level comments must keep working alongside the object description.
  const plusObject = plus as {
    properties?: Record<string, { description?: string }>;
  };
  TestValidator.equals(
    "x property description",
    plusObject.properties?.x?.description,
    "X coordinate.",
  );
};
