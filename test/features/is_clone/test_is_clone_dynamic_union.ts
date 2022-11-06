import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_dynamic_union = _test_is_clone(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.isClone<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
