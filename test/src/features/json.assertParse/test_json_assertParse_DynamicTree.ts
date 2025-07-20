import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_assertParse_DynamicTree = (): void =>
  _test_json_assertParse(TypeGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )((input) => typia.json.assertParse<DynamicTree>(input));
