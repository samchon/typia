import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalPropertyUnion = _test_assertEquals(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.assertEquals(input),
);