import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createValidate_DynamicTemplate = _test_validate(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(typia.createValidate<DynamicTemplate>());
