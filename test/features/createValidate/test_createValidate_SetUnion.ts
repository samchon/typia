import typia from "../../../src";

import { SetUnion } from "../../structures/SetUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_SetUnion = _test_validate(
    "SetUnion",
    SetUnion.generate,
    typia.createValidate<SetUnion>(),
    SetUnion.SPOILERS,
);
