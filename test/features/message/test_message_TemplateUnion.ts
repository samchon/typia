import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_TemplateUnion = _test_message(
    "TemplateUnion",
    typia.message<TemplateUnion>(),
);