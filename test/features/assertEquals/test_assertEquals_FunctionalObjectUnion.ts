import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalObjectUnion = _test_assertEquals(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.assertEquals(input),
);
