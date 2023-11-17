import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertGuard_DynamicComposite = _test_assertGuard(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
    typia.createAssertGuard<DynamicComposite>(),
);
