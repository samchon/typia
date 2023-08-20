import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_stringify_ObjectNullable = _test_stringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.stringify<ObjectNullable>(input),
);
