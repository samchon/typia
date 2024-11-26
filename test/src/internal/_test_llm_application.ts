import { ILlmApplication, ILlmSchema } from "@samchon/openapi";
import fs from "fs";

export const _test_llm_application =
  <Model extends ILlmSchema.Model>(props: { model: Model; name: string }) =>
  (expected: ILlmApplication<Model>): void => {
    const actual: ILlmApplication<Model> = JSON.parse(
      fs.readFileSync(
        `${__dirname}/../../schemas/llm.application/${props.model}/${props.name}.json`,
        "utf8",
      ),
    );
    sort(expected);
    sort(actual);
  };

function sort<Model extends ILlmSchema.Model>(
  app: ILlmApplication<Model>,
): void {
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
