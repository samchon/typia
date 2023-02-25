import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectPropertyNullable =
    _test_validateStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        (input) => typia.validateStringify(input),
        ObjectPropertyNullable.SPOILERS,
    );
