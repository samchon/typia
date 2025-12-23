import {
  ILlmApplication,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@samchon/openapi";
import typia from "typia";

import { Escaper } from "../../../lib/utils/Escaper";
import { TestStructure } from "../helpers/TestStructure";

export const _test_llm_applicationEquals =
  (props: { name: string; factory: TestStructure<any> }) =>
  (app: ILlmApplication): void => {
    const func: ILlmFunction = app.functions.find((f) => f.name === "insert")!;
    const input = {
      first: props.factory.generate(),
    };
    const valid: IValidation<any> = func.validate(input);
    if (valid.success === false) {
      console.log(valid);
      throw new Error(
        `Bug on typia.llm.application(): failed to understand the ${props.name} type.`,
      );
    } else if (valid.data !== input)
      throw new Error(
        "Bug on typia.llm.application(): failed to archive the input value.",
      );
    typia.assert(valid);
    if (props.factory.ADDABLE === false) return;

    // EXPECTED
    const expected: string[] = (() => {
      const accessors: string[] = [];
      spoil(accessors, "$input.first", input.first);
      return accessors.sort();
    })();
    if (expected.length === 0) return;

    // SOLUTION
    const result: IValidation<any> = func.validate(input);
    const actual: string[] = result.success
      ? []
      : result.errors.map((err) => err.path).sort();

    // COMPARE
    if (
      expected.length !== actual.length ||
      expected.every((str, i) => str === actual[i]) === false
    ) {
      console.log(expected);
      console.log(actual);
      throw new Error(
        `Bug on typia.llm.application(): failed to detect surplus property on the ${props.name} type.`,
      );
    }
  };

function spoil(accessors: string[], path: string, input: any): void {
  if (Array.isArray(input)) spoil_array(accessors, path, input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    spoil_object(accessors, path, input);
}

function spoil_object(accessors: string[], path: string, obj: any): void {
  obj[KEY] = KEY;
  accessors.push(`${path}.${KEY}`);

  for (const [key, value] of Object.entries(obj))
    spoil(
      accessors,
      Escaper.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`,
      value,
    );
}

function spoil_array(accessors: string[], path: string, array: any[]): void {
  array.forEach((elem, i) => spoil(accessors, `${path}[${i}]`, elem));
}

const KEY = "non_regular_member";
