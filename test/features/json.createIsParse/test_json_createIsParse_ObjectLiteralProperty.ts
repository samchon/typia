import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_isParse_ObjectLiteralProperty = _test_json_isParse(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.json.createIsParse<ObjectLiteralProperty>(),
);
