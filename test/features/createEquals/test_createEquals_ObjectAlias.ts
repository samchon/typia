import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createEquals_ObjectAlias = _test_equals(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createEquals<ObjectAlias>(),
);
