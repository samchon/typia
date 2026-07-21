import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies Vercel tools validate every declared class output before success.
 *
 * The advertised result schema has a typed success branch and a textual failure
 * branch, but the AI SDK does not validate a controller's return value for the
 * adapter. The adapter must reject the complete non-object and wrong-shaped
 * matrix itself, including exact-property violations.
 *
 * 1. Confirm the public output schema exposes success and failure branches.
 * 2. Preserve a valid nested object in the typed success branch.
 * 3. Route undefined, null, array, primitive, and wrong-shaped values through the
 *    schema-conforming failure branch with actionable paths.
 *
 * The markdown fencing of that feedback is asserted by
 * `test_vercel_tool_error_single_json_fence`, which counts the fence on both
 * the arguments and output paths.
 */
export const test_vercel_tool_output_schema = async (): Promise<void> => {
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());
  const tools: Record<string, Tool> = toVercelTools(controller);
  const add: Tool = tools["add"]!;
  const schema: IJsonSchema | undefined = getJsonSchema(add.outputSchema);
  const branches: IJsonSchema[] = schema?.anyOf ?? [];
  const success: IJsonSchema | undefined = branches.find((branch) =>
    hasBooleanEnum(branch.properties?.success, true),
  );
  const failure: IJsonSchema | undefined = branches.find((branch) =>
    hasBooleanEnum(branch.properties?.success, false),
  );
  const data: IJsonSchema | undefined = success?.properties?.data as
    | IJsonSchema
    | undefined;

  TestValidator.predicate(
    "outputSchema should describe successful typed data",
    success !== undefined && data?.properties?.value !== undefined,
  );
  TestValidator.predicate(
    "outputSchema should describe tool error feedback",
    failure?.properties?.error !== undefined,
  );

  const result: unknown = await add.execute!(
    { x: 10, y: 5 },
    { toolCallId: "test-output", messages: [], abortSignal: undefined as any },
  );
  TestValidator.equals(
    "execute result should match outputSchema wrapper",
    result,
    {
      success: true,
      data: { value: 15 },
    },
  );

  const outputs: Record<string, Tool> = toVercelTools(
    typia.llm.controller<OutputController>("output", new OutputController()),
  );
  const valid: unknown = await outputs["read"]!.execute!(
    { variant: "valid" },
    {
      toolCallId: "test-valid-output",
      messages: [],
      abortSignal: undefined as any,
    },
  );
  TestValidator.equals("valid nested output uses the success branch", valid, {
    success: true,
    data: { value: 1, nested: { label: "valid" } },
  });

  for (const [variant, path] of invalidCases) {
    const result: unknown = await outputs["read"]!.execute!(
      { variant },
      {
        toolCallId: `test-${variant}-output`,
        messages: [],
        abortSignal: undefined as any,
      },
    );
    TestValidator.predicate(`${variant} uses the failure branch`, () => {
      const failure = result as { success?: boolean; error?: string };
      return (
        failure.success === false &&
        typeof failure.error === "string" &&
        failure.error.includes('Type errors in "read" output:') &&
        failure.error.includes(path)
      );
    });
  }
};

class OutputController {
  /** Return a nested result selected by the test variant. */
  read(input: OutputController.IInput): OutputController.IResult {
    const valid: OutputController.IResult = {
      value: 1,
      nested: { label: "valid" },
    };
    switch (input.variant) {
      case "valid":
        return valid;
      case "undefined":
        return undefined as never;
      case "null":
        return null as never;
      case "array":
        return [valid] as never;
      case "primitive":
        return "invalid" as never;
      case "missing":
        return { nested: valid.nested } as never;
      case "extra":
        return { ...valid, extra: true } as never;
      case "wrongNested":
        return { ...valid, nested: { label: 42 } } as never;
    }
  }
}
namespace OutputController {
  export interface IInput {
    variant: Variant;
  }
  export interface IResult {
    value: number;
    nested: {
      label: string;
    };
  }
}

type Variant =
  | "valid"
  | "undefined"
  | "null"
  | "array"
  | "primitive"
  | "missing"
  | "extra"
  | "wrongNested";

const invalidCases: ReadonlyArray<
  readonly [Exclude<Variant, "valid">, string]
> = [
  ["undefined", "$input"],
  ["null", "$input"],
  ["array", "$input"],
  ["primitive", "$input"],
  ["missing", "$input.value"],
  ["extra", "$input.extra"],
  ["wrongNested", "$input.nested.label"],
];

interface IJsonSchema {
  anyOf?: IJsonSchema[] | undefined;
  properties?: Record<string, unknown> | undefined;
  enum?: unknown[] | undefined;
}

const getJsonSchema = (schema: unknown): IJsonSchema | undefined =>
  typeof schema === "object" && schema !== null && "jsonSchema" in schema
    ? ((schema as { jsonSchema?: IJsonSchema }).jsonSchema ?? undefined)
    : undefined;

const hasBooleanEnum = (schema: unknown, value: boolean): boolean =>
  typeof schema === "object" &&
  schema !== null &&
  Array.isArray((schema as IJsonSchema).enum) &&
  (schema as IJsonSchema).enum?.includes(value) === true;
