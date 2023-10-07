import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createValidateDecode_TemplateUnion =
    _test_protobuf_validateDecode("TemplateUnion")<TemplateUnion>(
        TemplateUnion,
    )({
        decode: typia.protobuf.createValidateDecode<TemplateUnion>(),
        encode: typia.protobuf.createEncode<TemplateUnion>(),
    });
