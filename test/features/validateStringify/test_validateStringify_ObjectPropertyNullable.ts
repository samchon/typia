import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validateStringify_ObjectPropertyNullable =
    _test_validateStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        (input) => typia.validateStringify<ObjectPropertyNullable>(input),
        ObjectPropertyNullable.SPOILERS,
    );
