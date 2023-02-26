import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createEquals_ObjectPropertyNullable = _test_equals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createEquals<ObjectPropertyNullable>(),
);
