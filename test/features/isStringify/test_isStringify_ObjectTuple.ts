import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_isStringify_ObjectTuple = _test_isStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.isStringify(input),
    ObjectTuple.SPOILERS,
);
