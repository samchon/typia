import typia from "typia";

export const test_json_application_basic = (): void => {
  const app = typia.json.application<IJsonApplicationBasic>();

  if (app.version !== "3.1") throw new Error("unexpected version");
  if (app.functions.length !== 2)
    throw new Error(`unexpected function count: ${app.functions.length}`);

  const create = app.functions.find((func) => func.name === "create");
  if (create === undefined) throw new Error("missing create function");
  if (create.async !== false) throw new Error("create should be sync");
  if (create.description !== "Create a user.")
    throw new Error(`unexpected description: ${create.description}`);
  if (create.deprecated !== true) throw new Error("missing deprecated flag");
  if (create.parameters.length !== 1)
    throw new Error(`unexpected parameter count: ${create.parameters.length}`);
  if (create.parameters[0]!.name !== "input")
    throw new Error("unexpected parameter name");
  if (create.parameters[0]!.required !== true)
    throw new Error("input parameter should be required");
  if (create.parameters[0]!.description !== "Request payload.")
    throw new Error(
      `unexpected parameter description: ${create.parameters[0]!.description}`,
    );
  if (create.output === undefined) throw new Error("missing output");
  if (create.output.required !== true) throw new Error("output required flag");
  if (create.output.description !== "Creation result.")
    throw new Error(
      `unexpected output description: ${create.output.description}`,
    );

  const ping = app.functions.find((func) => func.name === "ping");
  if (ping === undefined) throw new Error("missing ping function");
  if (ping.parameters.length !== 0)
    throw new Error("ping should be parameterless");
  if (ping.output === undefined) throw new Error("missing ping output");
};

interface IJsonApplicationBasic {
  /**
   * Create a user.
   *
   * @deprecated
   * @param input Request payload.
   * @returns Creation result.
   */
  create(
    input: IJsonApplicationBasic.ICreateInput,
  ): IJsonApplicationBasic.ICreateOutput;

  /** Health probe. */
  ping(): boolean;

  /**
   * Internal operation.
   *
   * @internal
   */
  hidden(input: { value: string }): void;
}

namespace IJsonApplicationBasic {
  export interface ICreateInput {
    name: string;
    age: number;
  }

  export interface ICreateOutput {
    ok: boolean;
  }
}
