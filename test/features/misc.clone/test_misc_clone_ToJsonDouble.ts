import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_misc_clone_ToJsonDouble = _test_misc_clone(
    "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) => typia.misc.clone<ToJsonDouble>(input));
