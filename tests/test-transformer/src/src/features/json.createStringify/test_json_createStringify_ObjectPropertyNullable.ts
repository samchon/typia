import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createStringify_ObjectPropertyNullable = (): void => _test_json_stringify(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.json.createStringify<ObjectPropertyNullable>());
