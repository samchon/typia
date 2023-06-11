import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_isPrune_ObjectSimple = _test_isPrune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.isPrune(input),
    ObjectSimple.SPOILERS,
);
