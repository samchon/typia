import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createValidateEquals_ObjectTuple = _test_validateEquals(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createValidateEquals<ObjectTuple>(),
);
