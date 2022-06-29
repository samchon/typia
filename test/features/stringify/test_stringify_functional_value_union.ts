import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_stringify_for_of } from "./_test_stringify_for_of";

export const test_stringify_functional_value_union = _test_stringify_for_of(
    "functional union value",
    FunctionalValueUnion.generate(),
    (input) => TSON.stringify(input),
    (json, data) => json === JSON.stringify(data),
);
