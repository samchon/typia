import typia from "../../../src";

import { SetAlias } from "../../structures/SetAlias";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_SetAlias = _test_isClone(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.isClone(input),
    SetAlias.SPOILERS,
);
