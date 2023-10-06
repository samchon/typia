import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_isStringify_ObjectLiteralType = _test_json_isStringify(
    "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.json.isStringify<ObjectLiteralType>(input),
);
