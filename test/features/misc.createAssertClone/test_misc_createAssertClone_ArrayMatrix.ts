import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_assertClone_ArrayMatrix =
    _test_misc_assertClone<ArrayMatrix>(ArrayMatrix)(
        typia.misc.createAssertClone<ArrayMatrix>(),
    );
