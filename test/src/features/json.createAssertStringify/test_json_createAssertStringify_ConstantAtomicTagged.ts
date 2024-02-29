import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_createAssertStringify_ConstantAtomicTagged =
  _test_json_assertStringify("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )(typia.json.createAssertStringify<ConstantAtomicTagged>());
