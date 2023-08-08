import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_equals_ObjectNullable = _test_equals(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createEquals<ObjectNullable>(),
);
