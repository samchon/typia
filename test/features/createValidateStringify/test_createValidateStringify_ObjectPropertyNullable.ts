import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createValidateStringify_ObjectPropertyNullable =
    _test_validateStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        typia.createValidateStringify<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
