import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_functional_property = _test_assert_type(
    "functional property",
    FunctionalProperty.generate,
    TSON.createAssertType<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
