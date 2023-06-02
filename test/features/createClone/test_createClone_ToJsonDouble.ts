import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createClone_ToJsonDouble = _test_clone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createClone<ToJsonDouble>(),
);
