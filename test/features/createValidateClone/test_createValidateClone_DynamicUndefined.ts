import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createValidateClone_DynamicUndefined = _test_validateClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createValidateClone<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
