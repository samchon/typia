import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_ConstantAtomicUnion = _test_validateStringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.validateStringify(input),
    ConstantAtomicUnion.SPOILERS,
);
