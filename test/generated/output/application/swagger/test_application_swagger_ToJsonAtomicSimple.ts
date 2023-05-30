import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonAtomicSimple } from "../../../../structures/ToJsonAtomicSimple";
export const test_application_swagger_ToJsonAtomicSimple = _test_application("swagger")("ToJsonAtomicSimple", typia.application<[
    ToJsonAtomicSimple
], "swagger">());
