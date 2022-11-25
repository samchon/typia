import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_FunctionalPropertyUnion = _test_isClone(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.isClone(input),
    FunctionalPropertyUnion.SPOILERS,
);
