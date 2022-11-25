import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_FunctionalArrayUnion = _test_isClone(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => TSON.isClone(input),
    FunctionalArrayUnion.SPOILERS,
);
