import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_misc_clone_ToJsonTuple = _test_misc_clone(
    "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) => typia.misc.clone<ToJsonTuple>(input));
