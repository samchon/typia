import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_stringify_ObjectPartialAndRequired = (): void =>
  _test_json_stringify("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input) => typia.json.stringify<ObjectPartialAndRequired>(input));
