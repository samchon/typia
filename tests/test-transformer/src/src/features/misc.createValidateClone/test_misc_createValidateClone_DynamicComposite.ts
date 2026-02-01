import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_createValidateClone_DynamicComposite = (): void => _test_misc_validateClone(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.misc.createValidateClone<DynamicComposite>());
