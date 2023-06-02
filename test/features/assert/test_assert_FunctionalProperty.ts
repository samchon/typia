import typia from "../../../src";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_FunctionalProperty = _test_assert(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.assert(input),
    FunctionalProperty.SPOILERS,
);
