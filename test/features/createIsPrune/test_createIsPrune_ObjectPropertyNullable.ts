import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createIsPrune_ObjectPropertyNullable = _test_isPrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createIsPrune<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
