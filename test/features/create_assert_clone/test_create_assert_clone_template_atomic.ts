import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_template_atomic =
    _test_assert_clone(
        "template atomic",
        TemplateAtomic.generate,
        TSON.createAssertClone<TemplateAtomic>(),
        TemplateAtomic.SPOILERS,
    );
