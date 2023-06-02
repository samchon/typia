import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_createAssertClone_SetSimple = _test_assertClone(
    "SetSimple",
    SetSimple.generate,
    typia.createAssertClone<SetSimple>(),
    SetSimple.SPOILERS,
);
