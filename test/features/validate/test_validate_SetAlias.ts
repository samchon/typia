import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { SetAlias } from "../../structures/SetAlias";

export const test_validate_SetAlias = _test_validate(
    "SetAlias",
)<SetAlias>(
    SetAlias
)((input) => typia.validate<SetAlias>(input));
