import { ILlmApplication, ILlmFunction, ILlmSchema } from "@samchon/openapi";
import fs from "fs";
import typia, { IValidation } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_llm_application =
  (props: { name: string; factory: TestStructure<any> }) =>
  (app: ILlmApplication): void => {
    const actual: ILlmApplication = JSON.parse(
      fs.readFileSync(
        `${__dirname}/../../schemas/llm.application/${props.name}.json`,
        "utf8",
      ),
    );
    sort(app);
    sort(actual);

    if (primitive_equal_to(actual, app) === false)
      throw new Error(
        `Bug on typia.llm.application<${props.name}Application>(): failed to understand the ${props.name} type.`,
      );

    const func: ILlmFunction = app.functions.find((f) => f.name === "insert")!;
    const input: object = {
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

    const wrong: ISpoiled[] = [];
    for (const spoil of props.factory.SPOILERS ?? []) {
      const elem: any = props.factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<any> = func.validate({
        first: elem,
      });
      if (valid.success === true)
        throw new Error(
          `Bug on typia.llm.application(): failed to detect error on the ${props.name} type.`,
        );

      typia.assert(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every(
          (e, i) => e.path === expected[i]?.replace("$input", "$input.first"),
        ) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.llm.application(): failed to detect error on the ${props.name} type.`,
      );
    }
  };

function sort(app: ILlmApplication): void {
  function object(elem: object) {
    for (const value of Object.values(elem)) iterate(value);
  }
  function array(elem: Array<any>) {
    for (const v of elem) iterate(v);
    elem.sort((x, y) => {
      const alpha = JSON.stringify(x);
      const beta = JSON.stringify(y);
      return alpha < beta ? -1 : alpha === beta ? 0 : 1;
    });
  }
  function iterate(elem: any) {
    if (elem === null || elem === undefined) return;
    else if (Array.isArray(elem)) array(elem);
    else if (typeof elem === "object") object(elem);
  }
  iterate(app);
}

interface ISpoiled {
  expected: string[];
  actual: string[];
}
