import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectJsonTag } from "../../../../structures/ObjectJsonTag";
export const test_application_ajv_ObjectJsonTag = _test_application("ajv")("ObjectJsonTag", typia.application<[
    ObjectJsonTag
], "ajv">());
