import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_isParse_ObjectLiteralType = _test_json_isParse(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.json.isParse<ObjectLiteralType>(input));
