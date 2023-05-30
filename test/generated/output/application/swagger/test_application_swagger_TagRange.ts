import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagRange } from "../../../../structures/TagRange";
export const test_application_swagger_TagRange = _test_application("swagger")("TagRange", typia.application<[
    TagRange
], "swagger">());
