import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_createAssertClone_SetAlias = _test_assertClone(
    "SetAlias",
    SetAlias.generate,
    typia.createAssertClone<SetAlias>(),
    SetAlias.SPOILERS,
);
