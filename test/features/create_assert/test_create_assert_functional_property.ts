import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_functional_property = _test_assert(
    "functional property",
    FunctionalProperty.generate,
    TSON.createAssertType<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
