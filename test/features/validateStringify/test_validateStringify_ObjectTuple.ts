import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectTuple = _test_validateStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.validateStringify(input),
    ObjectTuple.SPOILERS,
);