import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalTuple = _test_assertClone(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createAssertClone<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
