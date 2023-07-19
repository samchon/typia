import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_equals_DynamicComposite = _test_equals<DynamicComposite>(
    DynamicComposite,
)(typia.createEquals<DynamicComposite>());
