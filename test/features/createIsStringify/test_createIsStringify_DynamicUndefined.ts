import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicUndefined = _test_isStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    TSON.createIsStringify<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);