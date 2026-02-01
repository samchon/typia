import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_validateEquals_FunctionalArray = (): void => _test_validateEquals(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)((input) => typia.validateEquals<FunctionalArray>(input));
