import typia from "../../../src";

import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_is } from "../../internal/_test_is";

export const test_is_FunctionalValue = _test_is(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) => typia.is(input),
);
