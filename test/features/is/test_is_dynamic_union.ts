import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_dynamic_union = _test_is(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.is(input),
    DynamicUnion.SPOILERS,
);
