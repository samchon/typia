import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagDefault } from "../../../../structures/TagDefault";
export const test_application_swagger_TagDefault = _test_application("swagger")("TagDefault", typia.application<[
    TagDefault
], "swagger">());
