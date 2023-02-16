import typia from "typia";

import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_FunctionalValueUnion = _test_equals(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => typia.equals(input),
);
