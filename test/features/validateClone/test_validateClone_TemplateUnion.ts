import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_validateClone_TemplateUnion = _test_validateClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.validateClone<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
