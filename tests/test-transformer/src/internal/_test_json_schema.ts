import fs from "fs";
import { IJsonSchemaUnit } from "typia";

import { primitive_equal_to } from "../utils/primitive_equal_to";

export const _test_json_schema =
  (props: { version: string; name: string }) =>
  <App extends IJsonSchemaUnit<any>>(app: App): void => {
    const actual: IJsonSchemaUnit<any> = JSON.parse(
      fs.readFileSync(
        `${__dirname}/../../schemas/json.schema/v${props.version.replace(".", "_")}/${props.name}.json`,
        "utf8",
      ),
    );
    sort(app);
    sort(actual);

    if (primitive_equal_to(app, actual) === false)
      throw new Error(
        `Bug on typia.json.schema<${props.name}, "${props.version}">(): failed to understand the ${props.name} type.`,
      );
  };

function sort(app: IJsonSchemaUnit<any>): void {
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
