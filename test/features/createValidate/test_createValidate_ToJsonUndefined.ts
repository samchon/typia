import TSON from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ToJsonUndefined = _test_validate(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    TSON.createValidate<ToJsonUndefined>(),
);
