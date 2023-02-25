import typia from "typia";
import { TagArray } from "../../../structures/TagArray";
import { _test_application } from "../../internal/_test_application";
export const test_application_swagger_TagArray = _test_application("swagger")("TagArray", typia.application<[
    TagArray
], "swagger">());
