import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_set_alias = _test_clone(
    "aliased set",
    SetAlias.generate,
    TSON.createClone<SetAlias>(),
);
