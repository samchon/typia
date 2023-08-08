import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_isStringify_ObjectPropertyNullable =
    _test_json_isStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        (input) => typia.json.isStringify(input),
        ObjectPropertyNullable.SPOILERS,
    );
