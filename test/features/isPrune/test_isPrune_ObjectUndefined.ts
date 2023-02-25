import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectUndefined = _test_isPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.isPrune(input),
    ObjectUndefined.SPOILERS,
);
