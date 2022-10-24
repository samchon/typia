import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_functional_property_union = _test_stringify(
    "functional union property",
    FunctionalPropertyUnion.generate,
    (input) => TSON.stringify(input),
);
