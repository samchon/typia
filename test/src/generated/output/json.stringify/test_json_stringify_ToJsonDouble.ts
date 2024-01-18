import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_stringify_ToJsonDouble = _test_json_stringify(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  ((input: ToJsonDouble): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $number = require("typia/lib/functional/$number").$number;
    return `{"id":${$number((input.toJSON() as any).id)},"flag":${
      (input.toJSON() as any).flag
    }}`;
  })(input),
);
