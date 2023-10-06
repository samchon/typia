import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createIsParse_ConstantAtomicUnion = _test_json_isParse(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.json.createIsParse<ConstantAtomicUnion>());
