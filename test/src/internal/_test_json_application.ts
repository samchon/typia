import fs from "fs";
import { IJsonApplication } from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_json_application =
  (props: { purpose: "ajv" | "swagger"; surplus: boolean; name: string }) =>
  <App extends IJsonApplication>(app: App) => {
    const actual: IJsonApplication = JSON.parse(
      fs.readFileSync(
        `${__dirname}/../../schemas/json/${props.purpose}_${
          props.surplus ? "surplus" : "standard"
        }/${props.name}.json`,
        "utf8",
      ),
    );
    sort(app);
    sort(actual);

    if (primitive_equal_to(app, actual) === false)
      throw new Error(
        `Bug on typia.json.application<[${props.name}], "${props.purpose}", ${props.surplus}>(): failed to understand the ${props.name} type.`,
      );
  };

function sort(app: IJsonApplication): void {
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
