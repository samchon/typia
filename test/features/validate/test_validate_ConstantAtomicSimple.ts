import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ConstantAtomicSimple = _test_validate(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.validate(input),
    ConstantAtomicSimple.SPOILERS,
);
