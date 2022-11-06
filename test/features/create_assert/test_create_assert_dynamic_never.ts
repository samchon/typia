import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_never = _test_assert(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createAssertType<DynamicNever>(),
    DynamicNever.SPOILERS,
);
