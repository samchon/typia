import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assert_ObjectHttpConstant = _test_assert(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.assert<ObjectHttpConstant>(input),
);
