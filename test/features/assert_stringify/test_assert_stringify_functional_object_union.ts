import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_functional_object_union =
    _test_assert_stringify(
        "functional union object",
        FunctionalObjectUnion.generate,
        (input) => TSON.assertStringify(input),
        FunctionalObjectUnion.SPOILERS,
    );
