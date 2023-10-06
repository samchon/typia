import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssert_ObjectGenericAlias = _test_assert(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.createAssert<ObjectGenericAlias>(),
);
