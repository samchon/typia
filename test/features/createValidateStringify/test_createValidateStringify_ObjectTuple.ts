import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createValidateStringify_ObjectTuple = _test_validateStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createValidateStringify<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
