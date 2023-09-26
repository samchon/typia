import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createIsParse_ObjectGeneric = _test_json_isParse(
    "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)(typia.json.createIsParse<ObjectGeneric>());
