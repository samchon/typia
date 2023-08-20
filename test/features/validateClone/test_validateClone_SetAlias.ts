import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_validateClone_SetAlias = _test_validateClone(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.validateClone<SetAlias>(input),
    SetAlias.SPOILERS,
);
