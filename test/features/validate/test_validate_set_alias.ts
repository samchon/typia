import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_set_alias = _test_validate(
    "aliased set",
    SetAlias.generate,
    (input) => TSON.validate(input),
    SetAlias.SPOILERS,
);
