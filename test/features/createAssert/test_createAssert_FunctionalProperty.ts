import typia from "../../../src";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalProperty = _test_assert(
    "FunctionalProperty",
    FunctionalProperty.generate,
    typia.createAssert<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
