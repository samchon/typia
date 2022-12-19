import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectAlias = _test_stringify(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createStringify<ObjectAlias>(),
);