import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ConstantConstEnumeration = _test_validate(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.validate(input),
    ConstantConstEnumeration.SPOILERS,
);
