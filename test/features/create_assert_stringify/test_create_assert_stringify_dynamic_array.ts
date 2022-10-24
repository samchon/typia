import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_dynamic_array =
    _test_assert_stringify(
        "dynamic array",
        DynamicArray.generate,
        TSON.createAssertStringify<DynamicArray>(),
        DynamicArray.SPOILERS,
    );
