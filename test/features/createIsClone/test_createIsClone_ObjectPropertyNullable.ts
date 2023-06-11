import typia from "../../../src";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_ObjectPropertyNullable = _test_isClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createIsClone<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
