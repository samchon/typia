import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_FunctionalTuple = _test_isClone(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => TSON.isClone(input),
    FunctionalTuple.SPOILERS,
);
