import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectTuple = _test_isStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createIsStringify<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
