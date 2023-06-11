import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_ConstantConstEnumeration = _test_assertEquals(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.assertEquals(input),
);
