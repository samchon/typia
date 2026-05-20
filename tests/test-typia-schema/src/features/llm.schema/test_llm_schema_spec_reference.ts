import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

/**
 * Verifies that `typia.llm.schema` handles recursive types by emitting
 * `$ref`-based cycles in `$defs`.
 *
 * Self-referential types must be lifted into `$defs` and back-referenced via
 * `$ref` to avoid infinite expansion. The `required` array order is not
 * guaranteed, so the test sorts before comparing. A regression could either
 * stack-overflow or omit the back-reference.
 *
 * 1. Declare `INode` with optional `next: INode` and `children: INode[]`
 *    self-references.
 * 2. Call `typia.llm.schema<INode>($defs)` and assert the root is a `$ref` to
 *    `INode`.
 * 3. Assert `$defs.INode` has the correct properties and sorted `required` list.
 */
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
  const def = clean($defs.INode) as {
    type: string;
    properties: Record<string, unknown>;
    required: string[];
    additionalProperties: boolean;
  };
  TestValidator.equals("recursive definition type", def?.type, "object");
  TestValidator.equals(
    "recursive definition required (sorted)",
    [...(def?.required ?? [])].sort(),
    ["children", "value"].sort(),
  );
  TestValidator.equals(
    "recursive definition additionalProperties",
    def?.additionalProperties,
    false,
  );
  TestValidator.equals(
    "recursive definition children",
    def?.properties.children,
    {
      type: "array",
      items: { $ref: "#/$defs/INode" },
    },
  );
  TestValidator.equals("recursive definition next", def?.properties.next, {
    $ref: "#/$defs/INode",
  });
  TestValidator.equals("recursive definition value", def?.properties.value, {
    type: "string",
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
