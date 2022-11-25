import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_dynamic_composite = _test_assert(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.assert(input),
    DynamicComposite.SPOILERS,
);
