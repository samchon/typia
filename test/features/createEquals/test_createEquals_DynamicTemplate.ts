import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_equals_DynamicTemplate = _test_equals(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(typia.createEquals<DynamicTemplate>());
