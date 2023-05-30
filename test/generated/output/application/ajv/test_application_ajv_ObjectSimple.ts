import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectSimple } from "../../../../structures/ObjectSimple";
export const test_application_ajv_ObjectSimple = _test_application("ajv")("ObjectSimple", typia.application<[
    ObjectSimple
], "ajv">());
