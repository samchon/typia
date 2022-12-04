import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ToJsonUnion = _test_validateClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    TSON.createValidateClone<ToJsonUnion>(),
);
