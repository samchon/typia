import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_dynamic_simple = _test_is_clone(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.isClone(input),
    DynamicSimple.SPOILERS,
);
