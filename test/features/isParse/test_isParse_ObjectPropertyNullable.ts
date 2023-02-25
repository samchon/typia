import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectPropertyNullable = _test_isParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.isParse<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
