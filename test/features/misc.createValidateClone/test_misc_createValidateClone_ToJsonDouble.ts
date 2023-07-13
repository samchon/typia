import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_misc_validateClone_ToJsonDouble = _test_misc_validateClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.misc.createValidateClone<ToJsonDouble>(),
);
