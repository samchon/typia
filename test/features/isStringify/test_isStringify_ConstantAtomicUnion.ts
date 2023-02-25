import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ConstantAtomicUnion = _test_isStringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.isStringify(input),
    ConstantAtomicUnion.SPOILERS,
);
