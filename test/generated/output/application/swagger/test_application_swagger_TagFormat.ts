import typia from "typia";
import { TagFormat } from "../../../../structures/TagFormat";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_swagger_TagFormat = _test_application("swagger")("TagFormat", typia.application<[
    TagFormat
], "swagger">());
