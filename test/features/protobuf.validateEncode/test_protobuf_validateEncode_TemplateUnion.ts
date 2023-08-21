import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_validateEncode_TemplateUnion =
    _test_protobuf_validateEncode("TemplateUnion")<TemplateUnion>(
        TemplateUnion,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TemplateUnion>(input),
        message: typia.protobuf.message<TemplateUnion>(),
    });
