import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagMatrix } from "../../../../structures/TagMatrix";
export const test_application_swagger_TagMatrix = _test_application("swagger")("TagMatrix", typia.application<[
    TagMatrix
], "swagger">());
