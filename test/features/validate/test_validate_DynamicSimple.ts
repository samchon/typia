import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_validate_DynamicSimple = _test_validate<DynamicSimple>(
    DynamicSimple,
)((input) => typia.validate(input));
