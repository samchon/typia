import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_isStringify_DynamicSimple = _test_isStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.isStringify(input),
    DynamicSimple.SPOILERS,
);
