import typia from "typia";

import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalValue = _test_is(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createIs<FunctionalValue>(),
);
