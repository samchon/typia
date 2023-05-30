import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagFormat } from "../../../../structures/TagFormat";
export const test_application_swagger_TagFormat = _test_application("swagger")("TagFormat", typia.application<[
    TagFormat
], "swagger">());
