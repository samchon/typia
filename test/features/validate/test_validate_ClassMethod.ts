import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_validate_ClassMethod = _test_validate<ClassMethod>(
    ClassMethod,
)((input) => typia.validate(input));
