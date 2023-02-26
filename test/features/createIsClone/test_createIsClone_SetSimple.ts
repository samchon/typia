import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_createIsClone_SetSimple = _test_isClone(
    "SetSimple",
    SetSimple.generate,
    typia.createIsClone<SetSimple>(),
    SetSimple.SPOILERS,
);
