import typia from "../../../src";

import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_is } from "../../internal/_test_is";

export const test_is_FunctionalArray = _test_is(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.is(input),
    FunctionalArray.SPOILERS,
);
