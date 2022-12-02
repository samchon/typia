import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicSimple = _test_assertStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => TSON.assertStringify(input),
    DynamicSimple.SPOILERS,
);
