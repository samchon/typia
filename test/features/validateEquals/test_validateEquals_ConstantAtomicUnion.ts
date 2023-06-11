import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_validateEquals_ConstantAtomicUnion = _test_validateEquals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.validateEquals(input),
);
