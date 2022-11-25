import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicSimple = _test_assertStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createAssertStringify<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
