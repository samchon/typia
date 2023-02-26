import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ToJsonDouble = _test_validateClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createValidateClone<ToJsonDouble>(),
);
