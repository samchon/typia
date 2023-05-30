import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ClassGetter } from "../../../../structures/ClassGetter";
export const test_application_swagger_ClassGetter = _test_application("swagger")("ClassGetter", typia.application<[
    ClassGetter
], "swagger">());
