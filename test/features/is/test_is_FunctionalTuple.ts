import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalTuple = _test_is(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => TSON.is(input),
    FunctionalTuple.SPOILERS,
);