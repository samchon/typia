import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createIs_ConstantAtomicSimple = (): void => _test_is(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)(typia.createIs<ConstantAtomicSimple>());
