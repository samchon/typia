import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_stringify_ObjectGeneric = _test_stringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.stringify(input),
);
