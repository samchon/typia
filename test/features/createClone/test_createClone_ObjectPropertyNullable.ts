import typia from "typia";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectPropertyNullable = _test_clone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createClone<ObjectPropertyNullable>(),
);
