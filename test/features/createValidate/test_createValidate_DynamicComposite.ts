import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicComposite = _test_validate(
    "DynamicComposite",
    DynamicComposite.generate,
    TSON.createValidate<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);