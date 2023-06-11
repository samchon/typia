import typia from "../../../src";

import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";
import { _test_is } from "../../internal/_test_is";

export const test_is_ArrayRepeatedOptional = _test_is(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    (input) => typia.is(input),
    ArrayRepeatedOptional.SPOILERS,
);
