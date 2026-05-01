import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

export const test_llm_schema_spec_reference = (): void => {
  interface INode {
    value: string;
    next?: INode;
    children: INode[];
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<INode>($defs);
  TestValidator.equals("recursive top ref", clean(schema), {
    $ref: "#/$defs/INode",
  });
  TestValidator.equals("recursive definition", clean($defs.INode), {
    type: "object",
    properties: {
      children: {
        type: "array",
        items: {
          $ref: "#/$defs/INode",
        },
      },
      next: {
        $ref: "#/$defs/INode",
      },
      value: {
        type: "string",
      },
    },
    required: ["value", "children"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
