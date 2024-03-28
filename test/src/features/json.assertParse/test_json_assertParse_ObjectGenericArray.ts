import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_assertParse_ObjectGenericArray = _test_json_assertParse(
  TypeGuardError,
)("ObjectGenericArray")<ObjectGenericArray>(ObjectGenericArray)((input) =>
  typia.json.assertParse<ObjectGenericArray>(input),
);
