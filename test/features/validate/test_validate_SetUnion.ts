import typia from "../../../src";

import { SetUnion } from "../../structures/SetUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_SetUnion = _test_validate(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.validate(input),
    SetUnion.SPOILERS,
);
