import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_misc_isClone_ToJsonTuple = _test_misc_isClone<ToJsonTuple>(
    ToJsonTuple,
)((input) => typia.misc.isClone<ToJsonTuple>(input));
