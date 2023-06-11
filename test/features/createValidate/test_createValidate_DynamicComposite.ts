import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createValidate_DynamicComposite = _test_validate(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createValidate<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
