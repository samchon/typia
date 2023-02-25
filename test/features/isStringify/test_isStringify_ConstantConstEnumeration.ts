import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ConstantConstEnumeration = _test_isStringify(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.isStringify(input),
    ConstantConstEnumeration.SPOILERS,
);
