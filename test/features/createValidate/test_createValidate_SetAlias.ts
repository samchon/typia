import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_SetAlias = _test_validate(
    "SetAlias",
    SetAlias.generate,
    TSON.createValidate<SetAlias>(),
    SetAlias.SPOILERS,
);
