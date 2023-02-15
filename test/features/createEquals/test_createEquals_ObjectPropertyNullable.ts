import typia from "typia";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectPropertyNullable = _test_equals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createEquals<ObjectPropertyNullable>(),
);
