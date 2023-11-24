import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_isStringify_ObjectPartialAndRequired =
  _test_json_isStringify("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input) => typia.json.isStringify<ObjectPartialAndRequired>(input));
