import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagLength } from "../../../../structures/TagLength";
export const test_application_swagger_TagLength = _test_application("swagger")("TagLength", typia.application<[
    TagLength
], "swagger">());
