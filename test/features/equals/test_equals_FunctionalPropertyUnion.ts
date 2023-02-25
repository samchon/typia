import typia from "../../../src";

import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_FunctionalPropertyUnion = _test_equals(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => typia.equals(input),
);
