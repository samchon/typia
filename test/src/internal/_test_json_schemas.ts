import fs from "fs";
import { IJsonSchemaCollection } from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_json_schemas =
  (props: { version: string; name: string }) =>
  <App extends IJsonSchemaCollection<any>>(app: App): void => {
    const actual: IJsonSchemaCollection<any> = JSON.parse(
      fs.readFileSync(
        `${__dirname}/../../schemas/json.schemas/v${props.version.replace(".", "_")}/${props.name}.json`,
        "utf8",
      ),
    );
    sort(app);
    sort(actual);

    if (primitive_equal_to(app, actual) === false)
      throw new Error(
        `Bug on typia.json.schemas<[${props.name}], "${props.version}">(): failed to understand the ${props.name} type.`,
      );
  };

function sort(app: IJsonSchemaCollection<any>): void {
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
