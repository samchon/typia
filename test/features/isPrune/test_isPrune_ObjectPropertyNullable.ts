import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_isPrune_ObjectPropertyNullable = _test_isPrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.isPrune<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
