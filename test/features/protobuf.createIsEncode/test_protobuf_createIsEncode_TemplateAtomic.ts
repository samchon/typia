import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createIsEncode_TemplateAtomic =
    _test_protobuf_isEncode("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)({
        isEncode: typia.protobuf.createIsEncode<TemplateAtomic>(),
        message: typia.protobuf.message<TemplateAtomic>(),
        decode: typia.protobuf.createDecode<TemplateAtomic>(),
    });
