import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_assertParse_ArrayAny = (): void =>
  _test_json_assertParse(TypeGuardError)("ArrayAny")<ArrayAny>(ArrayAny)(
    (input) => typia.json.assertParse<ArrayAny>(input),
  );
