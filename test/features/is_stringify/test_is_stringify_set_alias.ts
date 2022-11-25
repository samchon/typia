import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_set_alias = _test_is_stringify(
    "aliased set",
    SetAlias.generate,
    (input) => TSON.isStringify(input),
    SetAlias.SPOILERS,
);
