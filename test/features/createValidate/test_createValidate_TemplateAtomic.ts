import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TemplateAtomic = _test_validate(
    "TemplateAtomic",
    TemplateAtomic.generate,
    TSON.createValidate<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);