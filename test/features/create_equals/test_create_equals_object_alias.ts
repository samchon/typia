import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_alias = _test_equals(
    "aliased object",
    ObjectAlias.generate,
    TSON.createEquals<ObjectAlias>(),
);
