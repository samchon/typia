import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicSimple = _test_isStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.isStringify(input),
    DynamicSimple.SPOILERS,
);
