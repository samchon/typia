import typia from "typia";
import { ToJsonAtomicSimple } from "../../../../structures/ToJsonAtomicSimple";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_ToJsonAtomicSimple = _test_application("ajv")("ToJsonAtomicSimple", typia.application<[
    ToJsonAtomicSimple
], "ajv">());
