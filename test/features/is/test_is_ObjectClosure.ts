import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_is_ObjectClosure = _test_is(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => typia.is(input),
    ObjectClosure.SPOILERS,
);
