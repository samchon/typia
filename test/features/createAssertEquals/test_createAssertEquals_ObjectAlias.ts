import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectAlias = _test_assertEquals(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createAssertEquals<ObjectAlias>(),
);
