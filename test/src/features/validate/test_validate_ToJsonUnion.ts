import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_validate_ToJsonUnion = (): void => _test_validate(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)((input) => typia.validate<ToJsonUnion>(input));
