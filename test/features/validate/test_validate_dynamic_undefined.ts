import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_dynamic_undefined = _test_validate(
    "dynamic tree",
    DynamicUndefined.generate,
    (input) => TSON.validate(input),
    DynamicUndefined.SPOILERS,
);
