import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_dynamic_never =
    _test_assert_stringify(
        "dynamic tree",
        DynamicNever.generate,
        TSON.createAssertStringify<DynamicNever>(),
        DynamicNever.SPOILERS,
    );
