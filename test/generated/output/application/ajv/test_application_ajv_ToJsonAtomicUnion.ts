import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";
export const test_application_ajv_ToJsonAtomicUnion = _test_application("ajv")("ToJsonAtomicUnion", typia.application<[
    ToJsonAtomicUnion
], "ajv">());
