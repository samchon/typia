import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createIsPrune_ObjectUnionDouble = _test_isPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createIsPrune<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
