import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_dynamic_never = _test_assert_clone(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createAssertClone<DynamicNever>(),
    DynamicNever.SPOILERS,
);
