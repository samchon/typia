import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalTuple = _test_assert(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createAssert<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);