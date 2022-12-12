import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ToJsonArray = _test_validate(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createValidate<ToJsonArray>(),
);