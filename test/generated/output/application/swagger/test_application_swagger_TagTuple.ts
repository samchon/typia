import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagTuple } from "../../../../structures/TagTuple";
export const test_application_swagger_TagTuple = _test_application("swagger")("TagTuple", typia.application<[
    TagTuple
], "swagger">());
