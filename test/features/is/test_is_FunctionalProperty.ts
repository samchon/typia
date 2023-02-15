import typia from "typia";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalProperty = _test_is(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.is(input),
    FunctionalProperty.SPOILERS,
);
