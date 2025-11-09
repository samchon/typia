import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_createIsParse_ConstantAtomicTagged = (): void => _test_json_isParse(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.json.createIsParse<ConstantAtomicTagged>());
