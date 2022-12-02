import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_FunctionalValue = _test_validateEquals(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) => TSON.validateEquals(input),
);
