import typia from "typia";
import { SetSimple } from "../../../../structures/SetSimple";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_swagger_SetSimple = _test_application("swagger")("SetSimple", typia.application<[
    SetSimple
], "swagger">());
