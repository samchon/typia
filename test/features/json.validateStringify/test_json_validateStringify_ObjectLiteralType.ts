import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_validateStringify_ObjectLiteralType =
    _test_json_validateStringify<ObjectLiteralType>(ObjectLiteralType)(
        (input) => typia.json.validateStringify(input),
    );
