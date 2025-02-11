import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createEquals_FunctionalObjectUnion = _test_equals(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)(typia.createEquals<FunctionalObjectUnion>());
