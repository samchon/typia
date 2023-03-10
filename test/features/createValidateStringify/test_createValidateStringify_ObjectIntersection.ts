import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createValidateStringify_ObjectIntersection =
    _test_validateStringify(
        "ObjectIntersection",
        ObjectIntersection.generate,
        typia.createValidateStringify<ObjectIntersection>(),
        ObjectIntersection.SPOILERS,
    );
