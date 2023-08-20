import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_validateClone_ObjectUndefined = _test_validateClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validateClone<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
