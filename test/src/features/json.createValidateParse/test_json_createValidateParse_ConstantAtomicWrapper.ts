import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_createValidateParse_ConstantAtomicWrapper = (): void => _test_json_validateParse(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)(typia.json.createValidateParse<ConstantAtomicWrapper>());
