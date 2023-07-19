import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_validateClone_ClassMethod =
    _test_misc_validateClone<ClassMethod>(ClassMethod)((input) =>
        typia.misc.validateClone(input),
    );
