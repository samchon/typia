import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_stringify_ObjectTuple = _test_json_stringify(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) =>
  ((input: ObjectTuple): string => {
    const $string = require("typia/lib/functional/$string").$string;
    return `[${`{"id":${$string((input[0] as any).id)},"code":${$string(
      (input[0] as any).code,
    )},"name":${$string((input[0] as any).name)}}`},${`{"id":${$string(
      (input[1] as any).id,
    )},"mobile":${$string((input[1] as any).mobile)},"name":${$string(
      (input[1] as any).name,
    )}}`}]`;
  })(input),
);
