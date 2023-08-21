import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_validate_DynamicUndefined = _test_validate(
    "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)(typia.createValidate<DynamicUndefined>());
