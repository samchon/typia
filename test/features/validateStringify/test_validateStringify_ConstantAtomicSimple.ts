import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_ConstantAtomicSimple = _test_validateStringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.validateStringify(input),
    ConstantAtomicSimple.SPOILERS,
);
