import typia from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectLiteralType = _test_application("ajv")(
    "ObjectLiteralType",
    typia.application<[ObjectLiteralType], "ajv">(),
);
