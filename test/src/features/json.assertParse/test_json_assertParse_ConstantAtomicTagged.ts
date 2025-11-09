import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ConstantAtomicTagged = (): void => _test_json_assertParse(TypeGuardError)(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((input) => typia.json.assertParse<ConstantAtomicTagged>(input));
