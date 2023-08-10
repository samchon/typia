import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_misc_assertClone_ToJsonDouble =
    _test_misc_assertClone<ToJsonDouble>(ToJsonDouble)(
        typia.misc.createAssertClone<ToJsonDouble>(),
    );
