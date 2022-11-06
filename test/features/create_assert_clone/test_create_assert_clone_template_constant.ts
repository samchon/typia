import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_template_constant =
    _test_assert_clone(
        "template constant",
        TemplateConstant.generate,
        TSON.createAssertClone<TemplateConstant>(),
        TemplateConstant.SPOILERS,
    );
