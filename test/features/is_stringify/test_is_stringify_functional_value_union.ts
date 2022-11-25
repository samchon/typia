import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_functional_value_union = _test_is_stringify(
    "functional union value",
    FunctionalValueUnion.generate,
    (input) => TSON.isStringify(input),
    FunctionalValueUnion.SPOILERS,
);
