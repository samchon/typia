import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_is } from "../internal/_test_is";

export const test_createIs_SetAlias = _test_is(
    "SetAlias",
    SetAlias.generate,
    typia.createIs<SetAlias>(),
    SetAlias.SPOILERS,
);
