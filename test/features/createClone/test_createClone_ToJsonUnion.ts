import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonUnion = _test_clone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    TSON.createClone<ToJsonUnion>(),
);