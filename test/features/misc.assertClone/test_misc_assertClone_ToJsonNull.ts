import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_misc_assertClone_ToJsonNull =
    _test_misc_assertClone<ToJsonNull>(ToJsonNull)((input) =>
        typia.misc.assertClone<ToJsonNull>(input),
    );
