import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectAlias = _test_isParse(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createIsParse<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
