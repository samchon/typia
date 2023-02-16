import typia from "typia";

import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_FunctionalObjectUnion = _test_equals(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => typia.equals(input),
);
