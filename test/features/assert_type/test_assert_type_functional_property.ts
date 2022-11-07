import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_functional_property = _test_assert_type(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.assertType(input),
    FunctionalProperty.SPOILERS,
);
