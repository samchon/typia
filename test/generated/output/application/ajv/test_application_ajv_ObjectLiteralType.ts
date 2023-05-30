import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectLiteralType } from "../../../../structures/ObjectLiteralType";
export const test_application_ajv_ObjectLiteralType = _test_application("ajv")("ObjectLiteralType", typia.application<[
    ObjectLiteralType
], "ajv">());
