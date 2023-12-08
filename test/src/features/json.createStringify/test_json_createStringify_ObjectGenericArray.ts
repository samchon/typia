import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createStringify_ObjectGenericArray =
  _test_json_stringify("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.json.createStringify<ObjectGenericArray>());
