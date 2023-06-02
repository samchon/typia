import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createIsStringify_ObjectTuple = _test_isStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createIsStringify<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
