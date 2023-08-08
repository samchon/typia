import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";

export const test_validate_ToJsonUndefined = _test_validate(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    typia.createValidate<ToJsonUndefined>(),
);
