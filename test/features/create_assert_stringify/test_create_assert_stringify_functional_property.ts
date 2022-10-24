import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_functional_property =
    _test_assert_stringify(
        "functional property",
        FunctionalProperty.generate,
        TSON.createAssertStringify<FunctionalProperty>(),
        FunctionalProperty.SPOILERS,
    );
