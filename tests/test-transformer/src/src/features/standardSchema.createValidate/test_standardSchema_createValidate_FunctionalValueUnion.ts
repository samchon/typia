import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_standardSchema_createValidate_FunctionalValueUnion = (): void => _test_standardSchema_validate(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)(typia.createValidate<FunctionalValueUnion>());
