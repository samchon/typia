import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_json_schema_spec_reference = (): void => {
  interface INode {
    value: string;
    next?: INode;
    children: INode[];
  }

  const unit = typia.json.schema<INode>();
  TestValidator.equals("root is dereferenced", clean(unit.schema), {
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
  TestValidator.equals(
    "component exists",
    clean(unit.components.schemas?.INode),
    clean(unit.schema),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
