import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_isPrune_ObjectGenericArray = _test_isPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.isPrune(input),
    ObjectGenericArray.SPOILERS,
);
