import typia from "typia";

import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalTuple = _test_is(
    "FunctionalTuple",
    FunctionalTuple.generate,
    typia.createIs<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
