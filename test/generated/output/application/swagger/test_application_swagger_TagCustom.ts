import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagCustom } from "../../../../structures/TagCustom";
export const test_application_swagger_TagCustom = _test_application("swagger")("TagCustom", typia.application<[
    TagCustom
], "swagger">());
