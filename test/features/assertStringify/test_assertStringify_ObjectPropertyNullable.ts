import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectPropertyNullable =
    _test_assertStringify(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        (input) => TSON.assertStringify(input),
        ObjectPropertyNullable.SPOILERS,
    );
