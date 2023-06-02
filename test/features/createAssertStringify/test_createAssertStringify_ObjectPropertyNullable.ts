import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertStringify_ObjectPropertyNullable =
    _test_assertStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        typia.createAssertStringify<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
