import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagType } from "../../../../structures/TagType";
export const test_application_swagger_TagType = _test_application("swagger")("TagType", typia.application<[
    TagType
], "swagger">());
