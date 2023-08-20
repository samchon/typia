import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_isPrune_TemplateUnion = _test_isPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.isPrune<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
