import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies json schema spec reference against the native typia.json.schema
 * output.
 *
 * The case builds its input in this file and asserts root is dereferenced,
 * component exists.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (root is dereferenced; component exists).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (root is dereferenced; component exists) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_spec_reference is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_spec_reference = (): void => {
  interface INode {
    value: string;
    next?: INode;
    children: INode[];
  }

  const unit = typia.json.schema<INode>();
  TestEquality.equals("root is dereferenced", clean(unit.schema), {
    type: "object",
    properties: {
      children: {
        type: "array",
        items: {
          $ref: "#/components/schemas/INode",
        },
      },
      next: {
        $ref: "#/components/schemas/INode",
      },
      value: {
        type: "string",
      },
    },
    required: ["value", "children"],
    additionalProperties: false,
  });
  TestEquality.equals(
    "component exists",
    clean(unit.components.schemas?.INode),
    clean(unit.schema),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
