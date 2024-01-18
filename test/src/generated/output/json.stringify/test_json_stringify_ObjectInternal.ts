import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_stringify_ObjectInternal = _test_json_stringify(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input) =>
  ((input: ObjectInternal): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
    return `{"id":${$string((input as any).id)},"name":${$string(
      (input as any).name,
    )}}`;
  })(input),
);
