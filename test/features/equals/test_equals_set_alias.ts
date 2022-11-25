import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_set_alias = _test_equals(
    "aliased set",
    SetAlias.generate,
    (input) => TSON.equals(input),
);
