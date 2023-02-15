import typia from "typia";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ConstantAtomicWrapper = _test_assertEquals(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => typia.assertEquals(input),
);
