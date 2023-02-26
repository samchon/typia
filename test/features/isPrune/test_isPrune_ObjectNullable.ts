import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectNullable = _test_isPrune(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.isPrune(input),
    ObjectNullable.SPOILERS,
);
