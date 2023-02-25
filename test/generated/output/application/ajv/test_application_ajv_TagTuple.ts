import typia from "typia";
import { TagTuple } from "../../../structures/TagTuple";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_TagTuple = _test_application("ajv")("TagTuple", typia.application<[
    TagTuple
], "ajv">());
