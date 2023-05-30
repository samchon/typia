import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonTuple } from "../../../../structures/ToJsonTuple";
export const test_application_swagger_ToJsonTuple = _test_application("swagger")("ToJsonTuple", typia.application<[
    ToJsonTuple
], "swagger">());
