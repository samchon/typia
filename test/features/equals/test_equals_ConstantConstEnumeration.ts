import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ConstantConstEnumeration = _test_equals(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.equals(input),
);
