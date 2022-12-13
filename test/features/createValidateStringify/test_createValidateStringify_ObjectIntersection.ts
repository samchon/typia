import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectIntersection =
    _test_validateStringify(
        "ObjectIntersection",
        ObjectIntersection.generate,
        typia.createValidateStringify<ObjectIntersection>(),
        ObjectIntersection.SPOILERS,
    );
