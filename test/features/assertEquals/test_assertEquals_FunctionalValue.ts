import typia from "../../../src";

import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_FunctionalValue = _test_assertEquals(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) => typia.assertEquals(input),
);
