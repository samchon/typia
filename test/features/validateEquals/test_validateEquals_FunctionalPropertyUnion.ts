import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_FunctionalPropertyUnion = _test_validateEquals(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.validateEquals(input),
);