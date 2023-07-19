import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_misc_assertClone_SetAlias = _test_misc_assertClone<SetAlias>(
    SetAlias,
)((input) => typia.misc.assertClone(input));
