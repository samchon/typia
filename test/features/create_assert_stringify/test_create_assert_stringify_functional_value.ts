import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_functional_value =
    _test_assert_stringify(
        "functional array",
        FunctionalValue.generate,
        TSON.createAssertStringify<FunctionalValue>(),
    );
