import typia from "typia";
import { TagPattern } from "../../../structures/TagPattern";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_TagPattern = _test_application("ajv")("TagPattern", typia.application<[
    TagPattern
], "ajv">());
