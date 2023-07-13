import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_isPrune_ObjectTuple = _test_misc_isPrune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.misc.createIsPrune<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
