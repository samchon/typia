import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_functional_value_union =
    _test_assert_stringify(
        "functional union value",
        FunctionalValueUnion.generate,
        TSON.createAssertStringify<FunctionalValueUnion>(),
        FunctionalValueUnion.SPOILERS,
    );
