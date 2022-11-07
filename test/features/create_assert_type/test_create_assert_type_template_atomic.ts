import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_template_atomic = _test_assert_type(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createAssertType<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
