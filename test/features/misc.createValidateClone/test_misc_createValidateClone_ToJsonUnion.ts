import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_misc_validateClone_ToJsonUnion = _test_misc_validateClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.misc.createValidateClone<ToJsonUnion>(),
);
