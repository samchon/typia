import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonDouble = _test_clone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    TSON.createClone<ToJsonDouble>(),
);