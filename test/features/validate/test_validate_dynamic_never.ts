import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_dynamic_never = _test_validate(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.validate(input),
    DynamicNever.SPOILERS,
);
