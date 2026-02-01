import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_validate_DynamicUnion = (): void => _test_validate(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)((input) => typia.validate<DynamicUnion>(input));
