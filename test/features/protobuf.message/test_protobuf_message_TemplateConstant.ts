import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TemplateConstant = _test_protobuf_message(
    "TemplateConstant",
)(typia.protobuf.message<TemplateConstant>());