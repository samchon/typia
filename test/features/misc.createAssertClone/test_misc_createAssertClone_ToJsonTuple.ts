import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_misc_assertClone_ToJsonTuple =
    _test_misc_assertClone<ToJsonTuple>(ToJsonTuple)(
        typia.misc.createAssertClone<ToJsonTuple>(),
    );
