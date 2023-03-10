import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_message_TemplateConstant = _test_message(
    "TemplateConstant",
    typia.message<TemplateConstant>(),
);
