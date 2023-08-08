import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_assertParse_ObjectPropertyNullable =
    _test_json_assertParse(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        (input) => typia.json.assertParse<ObjectPropertyNullable>(input),
        ObjectPropertyNullable.SPOILERS,
    );
