import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_assertClone_ClassMethod =
    _test_misc_assertClone<ClassMethod>(ClassMethod)((input) =>
        typia.misc.assertClone<ClassMethod>(input),
    );
