import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicUndefined = _test_validateClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    TSON.createValidateClone<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
