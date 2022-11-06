import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_dynamic_never = _test_is_clone(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.isClone(input),
    DynamicNever.SPOILERS,
);
