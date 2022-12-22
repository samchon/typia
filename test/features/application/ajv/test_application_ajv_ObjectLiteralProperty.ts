import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectLiteralProperty = _test_application(
    "ajv",
)("ObjectLiteralProperty", typia.application<[ObjectLiteralProperty], "ajv">());
