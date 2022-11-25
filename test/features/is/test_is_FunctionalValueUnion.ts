import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalValueUnion = _test_is(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => TSON.is(input),
    FunctionalValueUnion.SPOILERS,
);