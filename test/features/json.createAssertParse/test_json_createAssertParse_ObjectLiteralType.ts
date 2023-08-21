import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_assertParse_ObjectLiteralType = _test_json_assertParse(
    "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
    typia.json.createAssertParse<ObjectLiteralType>(),
);
