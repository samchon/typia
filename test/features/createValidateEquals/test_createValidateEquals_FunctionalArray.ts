import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createValidateEquals_FunctionalArray = _test_validateEquals(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)(typia.createValidateEquals<FunctionalArray>());
