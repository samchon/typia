import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createValidateClone_ToJsonUnion = _test_validateClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createValidateClone<ToJsonUnion>(),
);
