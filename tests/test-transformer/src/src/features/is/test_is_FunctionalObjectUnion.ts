import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_is_FunctionalObjectUnion = (): void => _test_is(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)((input) => typia.is<FunctionalObjectUnion>(input));
