import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assertGuard_ObjectHttpUndefindable = _test_assertGuard(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.assertGuard<ObjectHttpUndefindable>(input),
);
