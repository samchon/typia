import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_dynamic_simple = _test_is_clone(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createIsClone<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
