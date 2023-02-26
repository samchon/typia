import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_isPrune_ObjectUndefined = _test_isPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.isPrune(input),
    ObjectUndefined.SPOILERS,
);
