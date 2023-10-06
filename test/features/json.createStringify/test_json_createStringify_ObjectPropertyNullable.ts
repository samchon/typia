import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createStringify_ObjectPropertyNullable =
    _test_json_stringify("ObjectPropertyNullable")<ObjectPropertyNullable>(
        ObjectPropertyNullable,
    )(typia.json.createStringify<ObjectPropertyNullable>());
