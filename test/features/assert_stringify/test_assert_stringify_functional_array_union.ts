import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_functional_array_union =
    _test_assert_stringify(
        "functional union array",
        FunctionalArrayUnion.generate,
        (input) => TSON.assertStringify(input),
        FunctionalArrayUnion.SPOILERS,
    );
