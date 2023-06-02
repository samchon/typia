import typia from "../../../src";

import { SetUnion } from "../../structures/SetUnion";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_SetUnion = _test_validateClone(
    "SetUnion",
    SetUnion.generate,
    typia.createValidateClone<SetUnion>(),
    SetUnion.SPOILERS,
);
