import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_isPrune_ObjectGenericArray = _test_misc_isPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.misc.createIsPrune<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
