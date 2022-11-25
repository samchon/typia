import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_functional_value = _test_stringify(
    "functional array",
    FunctionalValue.generate,
    (input) => TSON.stringify(input),
);
