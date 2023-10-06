import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assert_ClassMethod = _test_assert("ClassMethod")<ClassMethod>(
    ClassMethod,
)((input) => typia.assert<ClassMethod>(input));
