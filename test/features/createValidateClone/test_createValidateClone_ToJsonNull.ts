import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ToJsonNull = _test_validateClone(
    "ToJsonNull",
    ToJsonNull.generate,
    TSON.createValidateClone<ToJsonNull>(),
);
