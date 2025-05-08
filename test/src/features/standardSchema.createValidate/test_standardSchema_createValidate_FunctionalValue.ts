import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_standardSchema_createValidate_FunctionalValue = _test_standardSchema_validate(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)(typia.createValidate<FunctionalValue>());
