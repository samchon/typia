import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonArray } from "../../../../structures/ToJsonArray";
export const test_application_swagger_ToJsonArray = _test_application("swagger")("ToJsonArray", typia.application<[
    ToJsonArray
], "swagger">());
