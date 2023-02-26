import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_isPrune_ObjectGeneric = _test_isPrune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.isPrune(input),
    ObjectGeneric.SPOILERS,
);
