import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createEquals_FunctionalValue = (): void => _test_equals(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)(typia.createEquals<FunctionalValue>());
