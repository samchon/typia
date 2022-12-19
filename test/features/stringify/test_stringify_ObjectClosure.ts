import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectClosure = _test_stringify(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => typia.stringify(input),
);