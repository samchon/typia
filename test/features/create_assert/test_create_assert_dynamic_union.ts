import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_union = _test_assert(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.assertType<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
