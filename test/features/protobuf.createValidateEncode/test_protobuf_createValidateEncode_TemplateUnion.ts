import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_validateEncode_TemplateUnion =
    _test_protobuf_validateEncode<TemplateUnion>(TemplateUnion)({
        validateEncode: typia.protobuf.createValidateEncode<TemplateUnion>(),
        message: typia.protobuf.message<TemplateUnion>(),
    });
