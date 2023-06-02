import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_validateClone_ObjectSimple = _test_validateClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.validateClone(input),
    ObjectSimple.SPOILERS,
);
