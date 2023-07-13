import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_validateParse_ObjectPropertyNullable =
    _test_json_validateParse(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        typia.json.createValidateParse<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
