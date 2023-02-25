import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ConstantAtomicSimple = _test_validateEquals(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createValidateEquals<ConstantAtomicSimple>(),
);
