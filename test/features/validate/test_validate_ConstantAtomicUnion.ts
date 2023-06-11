import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ConstantAtomicUnion = _test_validate(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.validate(input),
    ConstantAtomicUnion.SPOILERS,
);
