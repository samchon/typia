import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createValidateClone_ToJsonTuple = _test_validateClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createValidateClone<ToJsonTuple>(),
);
