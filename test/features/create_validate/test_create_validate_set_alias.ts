import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_set_alias = _test_validate(
    "aliased set",
    SetAlias.generate,
    TSON.createValidate<SetAlias>(),
    SetAlias.SPOILERS,
);
