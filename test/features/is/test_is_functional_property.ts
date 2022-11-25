import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_is } from "../internal/_test_is";

export const test_is_functional_property = _test_is(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.is(input),
    FunctionalProperty.SPOILERS,
);
