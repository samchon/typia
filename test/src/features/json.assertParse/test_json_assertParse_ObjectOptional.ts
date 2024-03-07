import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectOptional = _test_json_assertParse(
  TypeGuardError,
)("ObjectOptional")<ObjectOptional>(ObjectOptional)((input) =>
  typia.json.assertParse<ObjectOptional>(input),
);
