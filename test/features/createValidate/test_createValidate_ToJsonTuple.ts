import typia from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ToJsonTuple = _test_validate(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createValidate<ToJsonTuple>(),
);