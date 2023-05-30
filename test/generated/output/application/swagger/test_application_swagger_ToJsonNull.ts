import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonNull } from "../../../../structures/ToJsonNull";
export const test_application_swagger_ToJsonNull = _test_application("swagger")("ToJsonNull", typia.application<[
    ToJsonNull
], "swagger">());
