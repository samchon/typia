import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_validateParse_ObjectLiteralType =
    _test_json_validateParse("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )((input) => typia.json.validateParse<ObjectLiteralType>(input));
