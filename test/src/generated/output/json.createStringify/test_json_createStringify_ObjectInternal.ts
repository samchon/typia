import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_createStringify_ObjectInternal = _test_json_stringify(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input: ObjectInternal): string => {
  const $string = require("typia/lib/functional/$string").$string;
  return `{"id":${$string((input as any).id)},"name":${$string(
    (input as any).name,
  )}}`;
});
