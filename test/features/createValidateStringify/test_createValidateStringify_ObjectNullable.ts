import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectNullable =
    _test_validateStringify(
        "ObjectNullable",
        ObjectNullable.generate,
        TSON.createValidateStringify<ObjectNullable>(),
        ObjectNullable.SPOILERS,
    );
