import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ToJsonNull = _test_validate(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createValidate<ToJsonNull>(),
);