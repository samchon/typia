import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createClone_ObjectAlias = _test_clone(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createClone<ObjectAlias>(),
);
