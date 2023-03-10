import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertStringify_ObjectPropertyNullable =
    _test_assertStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        (input) => typia.assertStringify(input),
        ObjectPropertyNullable.SPOILERS,
    );
