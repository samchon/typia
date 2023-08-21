import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_stringify_ObjectDynamic = _test_json_stringify(
    "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)(typia.json.createStringify<ObjectDynamic>());
