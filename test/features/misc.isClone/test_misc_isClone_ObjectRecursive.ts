import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_isClone_ObjectRecursive =
    _test_misc_isClone<ObjectRecursive>(ObjectRecursive)((input) =>
        typia.misc.isClone(input),
    );
