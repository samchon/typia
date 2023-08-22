import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_validateEncode_TemplateAtomic =
    _test_protobuf_validateEncode("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TemplateAtomic>(input),
        message: typia.protobuf.message<TemplateAtomic>(),
        decode: typia.protobuf.createDecode<TemplateAtomic>(),
    });
