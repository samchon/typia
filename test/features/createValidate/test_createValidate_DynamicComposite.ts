import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_validate_DynamicComposite = _test_validate(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(typia.createValidate<DynamicComposite>());
