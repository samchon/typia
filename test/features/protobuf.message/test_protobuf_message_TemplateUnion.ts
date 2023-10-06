import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TemplateUnion = _test_protobuf_message(
    "TemplateUnion",
)(typia.protobuf.message<TemplateUnion>());