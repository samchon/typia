import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_validateClone_SetUnion = _test_validateClone(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.validateClone<SetUnion>(input),
    SetUnion.SPOILERS,
);
