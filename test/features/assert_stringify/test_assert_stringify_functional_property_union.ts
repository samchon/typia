import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_functional_property_union =
    _test_assert_stringify(
        "functional union property",
        FunctionalPropertyUnion.generate,
        (input) => TSON.assertStringify(input),
        FunctionalPropertyUnion.SPOILERS,
    );
