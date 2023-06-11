import typia from "../../../src";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_ConstantAtomicWrapper = _test_equals(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.equals(input),
);
