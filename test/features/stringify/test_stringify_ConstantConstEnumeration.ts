import typia from "typia";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ConstantConstEnumeration = _test_stringify(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.stringify(input),
);
