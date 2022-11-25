import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_FunctionalObjectUnion = _test_isClone(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.isClone(input),
    FunctionalObjectUnion.SPOILERS,
);
