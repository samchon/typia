import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_misc_assertClone_ToJsonArray =
    _test_misc_assertClone<ToJsonArray>(ToJsonArray)((input) =>
        typia.misc.assertClone<ToJsonArray>(input),
    );
