import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createIsPrune_ObjectTuple = _test_isPrune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createIsPrune<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
