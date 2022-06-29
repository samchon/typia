import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_is } from "./_test_is";

export const test_is_functional_property_union = _test_is(
    "functional union property",
    FunctionalPropertyUnion.generate,
    (input) => TSON.is(input),
);
