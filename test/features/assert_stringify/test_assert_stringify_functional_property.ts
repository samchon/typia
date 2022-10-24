import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_functional_property = _test_assert_stringify(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.assertStringify(input),
    FunctionalProperty.SPOILERS,
);
