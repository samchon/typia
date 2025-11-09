import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_validateStringify_ConstantAtomicTagged = (): void => _test_json_validateStringify(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((input) => typia.json.validateStringify<ConstantAtomicTagged>(input));
