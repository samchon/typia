import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_misc_isClone_ToJsonDouble = _test_misc_isClone<ToJsonDouble>(
    ToJsonDouble,
)((input) => typia.misc.isClone<ToJsonDouble>(input));
