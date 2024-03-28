import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_createIsStringify_ToJsonDouble = _test_json_isStringify(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input: ToJsonDouble): string | null => {
  const is = (input: any): input is ToJsonDouble => {
    return "object" === typeof input && null !== input && true;
  };
  const stringify = (input: ToJsonDouble): string => {
    const $number = (typia.json.createIsStringify as any).number;
    return `{"id":${$number((input.toJSON() as any).id)},"flag":${(input.toJSON() as any).flag}}`;
  };
  return is(input) ? stringify(input) : null;
});
