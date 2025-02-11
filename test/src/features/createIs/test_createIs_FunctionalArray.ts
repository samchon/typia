import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createIs_FunctionalArray = _test_is(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)(typia.createIs<FunctionalArray>());
