import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_createIsClone_SetAlias = _test_isClone(
    "SetAlias",
    SetAlias.generate,
    typia.createIsClone<SetAlias>(),
    SetAlias.SPOILERS,
);
