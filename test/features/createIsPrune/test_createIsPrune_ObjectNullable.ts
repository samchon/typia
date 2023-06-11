import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createIsPrune_ObjectNullable = _test_isPrune(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIsPrune<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
