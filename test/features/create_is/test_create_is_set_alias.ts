import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_is } from "../internal/_test_is";

export const test_create_is_set_alias = _test_is(
    "aliased set",
    SetAlias.generate,
    TSON.createIs<SetAlias>(),
    SetAlias.SPOILERS(),
);
