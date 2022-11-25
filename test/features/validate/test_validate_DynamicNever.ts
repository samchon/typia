import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicNever = _test_validate(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.validate(input),
    DynamicNever.SPOILERS,
);