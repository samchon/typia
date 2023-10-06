import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_createIsParse_ObjectPartialAndRequired =
    _test_json_isParse("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
        ObjectPartialAndRequired,
    )(typia.json.createIsParse<ObjectPartialAndRequired>());
