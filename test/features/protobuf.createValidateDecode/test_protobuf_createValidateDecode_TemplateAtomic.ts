import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_validateDecode_TemplateAtomic =
    _test_protobuf_validateDecode("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic,
    )({
        validateDecode: typia.protobuf.createValidateDecode<TemplateAtomic>(),
        encode: typia.protobuf.createEncode<TemplateAtomic>(),
    });
