import typia from "typia";

import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ConstantAtomicWrapper = _test_application(
    "ajv",
)("ConstantAtomicWrapper", typia.application<[ConstantAtomicWrapper], "ajv">());
