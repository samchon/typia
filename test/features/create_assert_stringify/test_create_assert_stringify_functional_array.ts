import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_functional_array =
    _test_assert_stringify(
        "functional array",
        FunctionalArray.generate,
        TSON.createAssertStringify<FunctionalArray>(),
        FunctionalArray.SPOILERS,
    );
