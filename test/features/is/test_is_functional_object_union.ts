import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_is } from "./_test_is";

export const test_is_functional_object_union = _test_is(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.is(input),
);
