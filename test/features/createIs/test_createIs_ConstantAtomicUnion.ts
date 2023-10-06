import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createIs_ConstantAtomicUnion = _test_is(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.createIs<ConstantAtomicUnion>());
