import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_is } from "./_test_is";

export const test_is_functional_value_union = _test_is(
    "functional union value",
    FunctionalValueUnion.generate,
    (input) => TSON.is(input),
);
