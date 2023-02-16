import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_ConstantAtomicSimple = _test_is(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.is(input),
    ConstantAtomicSimple.SPOILERS,
);
