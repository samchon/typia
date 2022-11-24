import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_dynamic_undefined = _test_validate(
    "dynamic tree",
    DynamicUndefined.generate,
    TSON.createValidate<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
