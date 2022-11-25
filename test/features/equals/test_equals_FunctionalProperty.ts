import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_FunctionalProperty = _test_equals(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => TSON.equals(input),
);
