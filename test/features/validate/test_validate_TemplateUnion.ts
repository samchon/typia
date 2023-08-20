import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_validate_TemplateUnion = _test_validate(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.validate<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
