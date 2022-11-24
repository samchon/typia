import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_functional_array_union =
    _test_assert_stringify(
        "functional union array",
        FunctionalArrayUnion.generate,
        TSON.createAssertStringify<FunctionalArrayUnion>(),
        FunctionalArrayUnion.SPOILERS,
    );
