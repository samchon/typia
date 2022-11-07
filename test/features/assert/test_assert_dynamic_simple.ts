import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_simple = _test_assert(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.assert(input),
    DynamicSimple.SPOILERS,
);
