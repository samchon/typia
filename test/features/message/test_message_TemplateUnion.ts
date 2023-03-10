import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_message_TemplateUnion = _test_message(
    "TemplateUnion",
    typia.message<TemplateUnion>(),
);
