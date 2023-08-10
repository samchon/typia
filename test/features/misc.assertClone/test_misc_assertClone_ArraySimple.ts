import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_assertClone_ArraySimple =
    _test_misc_assertClone<ArraySimple>(ArraySimple)((input) =>
        typia.misc.assertClone<ArraySimple>(input),
    );
