import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createValidate_DynamicComposite = (): void => _test_validate(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.createValidate<DynamicComposite>());
