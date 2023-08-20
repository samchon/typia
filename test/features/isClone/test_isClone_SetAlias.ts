import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_isClone_SetAlias = _test_isClone(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.isClone<SetAlias>(input),
    SetAlias.SPOILERS,
);
