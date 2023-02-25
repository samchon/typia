import typia from "../../../src";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ConstantEnumeration = _test_assertEquals(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.assertEquals(input),
);
