import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createEquals_ObjectTuple = _test_equals(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createEquals<ObjectTuple>(),
);
