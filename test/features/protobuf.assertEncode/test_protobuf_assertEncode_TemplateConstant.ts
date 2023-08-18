import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_assertEncode_TemplateConstant =
    _test_protobuf_assertEncode<TemplateConstant>(TemplateConstant)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TemplateConstant>(input),
        message: typia.protobuf.message<TemplateConstant>(),
    });
