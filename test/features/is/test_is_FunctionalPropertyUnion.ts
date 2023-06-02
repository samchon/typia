import typia from "../../../src";

import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_is } from "../../internal/_test_is";

export const test_is_FunctionalPropertyUnion = _test_is(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => typia.is(input),
    FunctionalPropertyUnion.SPOILERS,
);
