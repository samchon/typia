import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createValidateParse_ObjectPropertyNullable =
    _test_validateParse(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        typia.createValidateParse<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
