import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_functional_tuple =
    _test_assert_stringify(
        "functional tuple",
        FunctionalTuple.generate,
        TSON.createAssertStringify<FunctionalTuple>(),
        FunctionalTuple.SPOILERS,
    );
