import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_validateClone_ArrayRecursive =
    _test_misc_validateClone<ArrayRecursive>(ArrayRecursive)((input) =>
        typia.misc.validateClone<ArrayRecursive>(input),
    );
