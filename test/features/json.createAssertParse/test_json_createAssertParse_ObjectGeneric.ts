import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createAssertParse_ObjectGeneric = _test_json_assertParse(
    "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)(typia.json.createAssertParse<ObjectGeneric>());
