import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_assertStringify_ToJsonDouble = (): void =>
  _test_json_assertStringify(TypeGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )((input) => typia.json.assertStringify<ToJsonDouble>(input));
