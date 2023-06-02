import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createValidateEquals_ObjectIntersection =
    _test_validateEquals(
        "ObjectIntersection",
        ObjectIntersection.generate,
        typia.createValidateEquals<ObjectIntersection>(),
    );
