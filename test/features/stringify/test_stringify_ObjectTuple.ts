import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectTuple = _test_stringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.stringify(input),
);