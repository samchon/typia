import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_assertStringify_ObjectPropertyNullable =
    _test_json_assertStringify(
        "ObjectPropertyNullable",
    )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
        typia.json.assertStringify<ObjectPropertyNullable>(input),
    );
