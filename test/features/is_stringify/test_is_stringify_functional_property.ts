import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_functional_property = _test_is_stringify(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.isStringify(input),
    FunctionalProperty.SPOILERS,
);
