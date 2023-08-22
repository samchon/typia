import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_assertDecode_TemplateConstant =
    _test_protobuf_assertDecode("TemplateConstant")<TemplateConstant>(
        TemplateConstant,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TemplateConstant>(input),
        encode: typia.protobuf.createEncode<TemplateConstant>(),
    });
