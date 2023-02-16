import typia from "typia";

import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalPropertyUnion = _test_equals(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    typia.createEquals<FunctionalPropertyUnion>(),
);
