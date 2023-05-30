import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagPattern } from "../../../../structures/TagPattern";
export const test_application_swagger_TagPattern = _test_application("swagger")("TagPattern", typia.application<[
    TagPattern
], "swagger">());
