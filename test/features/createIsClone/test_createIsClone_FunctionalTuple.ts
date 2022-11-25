import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalTuple = _test_isClone(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createIsClone<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
