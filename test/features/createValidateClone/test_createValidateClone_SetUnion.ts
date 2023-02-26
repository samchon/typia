import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_createValidateClone_SetUnion = _test_validateClone(
    "SetUnion",
    SetUnion.generate,
    typia.createValidateClone<SetUnion>(),
    SetUnion.SPOILERS,
);
