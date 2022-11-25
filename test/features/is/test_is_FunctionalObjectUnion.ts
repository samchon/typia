import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalObjectUnion = _test_is(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.is(input),
    FunctionalObjectUnion.SPOILERS,
);
