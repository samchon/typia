import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicUndefined = _test_validate(
    "DynamicUndefined",
    DynamicUndefined.generate,
    TSON.createValidate<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);