import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createIsClone_ToJsonDouble = _test_isClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createIsClone<ToJsonDouble>(),
);
