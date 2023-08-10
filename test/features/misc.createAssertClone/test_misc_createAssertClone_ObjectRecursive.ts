import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_assertClone_ObjectRecursive =
    _test_misc_assertClone<ObjectRecursive>(ObjectRecursive)(
        typia.misc.createAssertClone<ObjectRecursive>(),
    );
