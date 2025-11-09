import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createValidateEquals_ArrayUnion = (): void => _test_validateEquals(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.createValidateEquals<ArrayUnion>());
