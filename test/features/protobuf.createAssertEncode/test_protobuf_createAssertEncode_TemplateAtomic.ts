import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createAssertEncode_TemplateAtomic =
    _test_protobuf_assertEncode("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic,
    )({
        assertEncode: typia.protobuf.createAssertEncode<TemplateAtomic>(),
        message: typia.protobuf.message<TemplateAtomic>(),
        decode: typia.protobuf.createDecode<TemplateAtomic>(),
    });
