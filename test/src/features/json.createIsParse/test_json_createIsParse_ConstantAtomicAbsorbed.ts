import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_createIsParse_ConstantAtomicAbsorbed = (): void => _test_json_isParse(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)(typia.json.createIsParse<ConstantAtomicAbsorbed>());
