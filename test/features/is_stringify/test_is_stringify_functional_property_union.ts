import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_functional_property_union = _test_is_stringify(
    "functional union property",
    FunctionalPropertyUnion.generate,
    (input) => TSON.isStringify(input),
    FunctionalPropertyUnion.SPOILERS,
);
