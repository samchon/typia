import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicUndefined = _test_isStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.isStringify(input),
    DynamicUndefined.SPOILERS,
);