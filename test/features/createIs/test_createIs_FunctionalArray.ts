import typia from "../../../src";

import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalArray = _test_is(
    "FunctionalArray",
    FunctionalArray.generate,
    typia.createIs<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
