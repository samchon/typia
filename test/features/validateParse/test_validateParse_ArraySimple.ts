import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArraySimple = _test_validateParse(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validateParse<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
