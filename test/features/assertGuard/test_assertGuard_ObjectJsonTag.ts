import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertGuard_ObjectJsonTag = _test_assertGuard(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
    typia.assertGuard<ObjectJsonTag>(input),
);
