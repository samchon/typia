import typia from "typia";

import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalValue = _test_assert(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createAssert<FunctionalValue>(),
);
