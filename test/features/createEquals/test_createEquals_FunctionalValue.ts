import typia from "typia";

import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalValue = _test_equals(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createEquals<FunctionalValue>(),
);
