import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_validateClone_ObjectTuple = _test_validateClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.validateClone(input),
    ObjectTuple.SPOILERS,
);
