import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TagMatrix } from "../../../../structures/TagMatrix";
export const test_application_ajv_TagMatrix = _test_application("ajv")("TagMatrix", typia.application<[
    TagMatrix
], "ajv">());
