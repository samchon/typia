import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ToJsonDouble =
  _test_json_assertStringify(TypeGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )((input) => typia.json.assertStringify<ToJsonDouble>(input));
