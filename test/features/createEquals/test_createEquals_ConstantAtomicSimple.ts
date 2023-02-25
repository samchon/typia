import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ConstantAtomicSimple = _test_equals(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createEquals<ConstantAtomicSimple>(),
);
