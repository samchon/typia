import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

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

  const broken: Record<string, Tool> = toVercelTools(
    typia.llm.controller<BrokenOutput>("broken", new BrokenOutput()),
  );
  const brokenResult: unknown = await broken["read"]!.execute!(
    {},
    {
      toolCallId: "test-broken-output",
      messages: [],
      abortSignal: undefined as any,
    },
  );
  TestValidator.equals(
    "typed undefined result should match outputSchema error branch",
    brokenResult,
    {
      success: false,
      error:
        'Function "read" returned undefined despite declaring an output schema',
    },
  );
};

class BrokenOutput {
  /** Read a typed result but violate it at runtime. */
  read(_: BrokenOutput.IProps): BrokenOutput.IResult {
    return undefined as any;
  }
}
namespace BrokenOutput {
  export interface IProps {}
  export interface IResult {
    value: number;
  }
}

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
