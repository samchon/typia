import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_dynamic_never = _test_is_clone(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createIsClone<DynamicNever>(),
    DynamicNever.SPOILERS,
);
