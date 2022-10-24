import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_functional_value_union = _test_stringify(
    "functional union value",
    FunctionalValueUnion.generate,
    (input) => TSON.stringify(input),
);
