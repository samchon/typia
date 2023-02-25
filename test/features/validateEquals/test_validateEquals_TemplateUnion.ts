import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TemplateUnion = _test_validateEquals(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.validateEquals(input),
);
