import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createEquals_FunctionalPropertyUnion = (): void => _test_equals(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)(typia.createEquals<FunctionalPropertyUnion>());
