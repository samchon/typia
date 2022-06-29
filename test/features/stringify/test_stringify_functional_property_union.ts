import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_stringify_for_of } from "./_test_stringify_for_of";

export const test_stringify_functional_property_union = _test_stringify_for_of(
    "functional union property",
    FunctionalPropertyUnion.generate(),
    (input) => TSON.stringify(input),
);
