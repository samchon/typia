import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectNullable = _test_assertEquals(
    "ObjectNullable",
    ObjectNullable.generate,
    TSON.createAssertEquals<ObjectNullable>(),
);