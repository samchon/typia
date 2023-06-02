import typia from "../../../src";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_ConstantEnumeration = _test_equals(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.equals(input),
);
