import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectGeneric = _test_equals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    TSON.createEquals<ObjectGeneric>(),
);
