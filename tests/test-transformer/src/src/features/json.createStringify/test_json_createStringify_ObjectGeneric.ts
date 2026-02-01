import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createStringify_ObjectGeneric = (): void => _test_json_stringify(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.json.createStringify<ObjectGeneric>());
