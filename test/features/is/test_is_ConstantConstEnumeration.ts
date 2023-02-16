import typia from "typia";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_is } from "../internal/_test_is";

export const test_is_ConstantConstEnumeration = _test_is(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.is(input),
    ConstantConstEnumeration.SPOILERS,
);
