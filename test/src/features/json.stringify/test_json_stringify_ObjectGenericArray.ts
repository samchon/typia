import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_stringify_ObjectGenericArray = (): void =>
  _test_json_stringify("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) => typia.json.stringify<ObjectGenericArray>(input));
