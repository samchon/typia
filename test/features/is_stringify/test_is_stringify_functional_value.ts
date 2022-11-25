import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_functional_value = _test_is_stringify(
    "functional array",
    FunctionalValue.generate,
    (input) => TSON.isStringify(input),
);
