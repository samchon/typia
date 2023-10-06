import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createAssert_ObjectHttpTypeTag = _test_assert(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.createAssert<ObjectHttpTypeTag>(),
);
