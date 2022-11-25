import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_is } from "../internal/_test_is";

export const test_is_set_alias = _test_is(
    "aliased set",
    SetAlias.generate,
    (input) => TSON.is(input),
    SetAlias.SPOILERS,
);
