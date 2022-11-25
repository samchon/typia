import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_set_alias = _test_stringify(
    "aliased set",
    SetAlias.generate,
    (input) => TSON.stringify(input),
);
