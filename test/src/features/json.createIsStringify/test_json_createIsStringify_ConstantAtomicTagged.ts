import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_createIsStringify_ConstantAtomicTagged = (): void => _test_json_isStringify(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.json.createIsStringify<ConstantAtomicTagged>());
