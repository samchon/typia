import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_assertClone_SetAlias = _test_assertClone(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.assertClone<SetAlias>(input),
    SetAlias.SPOILERS,
);
