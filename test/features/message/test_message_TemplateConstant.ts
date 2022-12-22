import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_message } from "../internal/_test_message";

export const test_message_TemplateConstant = _test_message(
    "TemplateConstant",
    typia.message<TemplateConstant>(),
);