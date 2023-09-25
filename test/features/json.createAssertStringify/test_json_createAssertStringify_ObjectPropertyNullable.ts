import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createAssertStringify_ObjectPropertyNullable =
    _test_json_assertStringify(
        "ObjectPropertyNullable",
    )<ObjectPropertyNullable>(ObjectPropertyNullable)(
        typia.json.createAssertStringify<ObjectPropertyNullable>(),
    );
