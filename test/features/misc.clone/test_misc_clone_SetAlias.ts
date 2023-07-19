import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { SetAlias } from "../../structures/SetAlias";

export const test_misc_clone_SetAlias = _test_misc_clone<SetAlias>(SetAlias)(
    (input) => typia.misc.clone(input),
);
