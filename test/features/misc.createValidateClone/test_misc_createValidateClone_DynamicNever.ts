import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_createValidateClone_DynamicNever = _test_misc_validateClone(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)(typia.misc.createValidateClone<DynamicNever>());
