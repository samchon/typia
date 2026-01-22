import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_assertParse_DynamicComposite = (): void =>
  _test_json_assertParse(TypeGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) => typia.json.assertParse<DynamicComposite>(input));
