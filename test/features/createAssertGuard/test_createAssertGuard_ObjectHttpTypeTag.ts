import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createAssertGuard_ObjectHttpTypeTag = _test_assertGuard(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.createAssertGuard<ObjectHttpTypeTag>(),
);
