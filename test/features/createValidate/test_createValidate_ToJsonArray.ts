import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_validate_ToJsonArray = _test_validate<ToJsonArray>(
    ToJsonArray,
)(typia.createValidate<ToJsonArray>());
