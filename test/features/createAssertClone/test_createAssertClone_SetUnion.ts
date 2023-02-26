import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_createAssertClone_SetUnion = _test_assertClone(
    "SetUnion",
    SetUnion.generate,
    typia.createAssertClone<SetUnion>(),
    SetUnion.SPOILERS,
);
