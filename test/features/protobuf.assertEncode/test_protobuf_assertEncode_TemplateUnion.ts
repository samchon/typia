import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_assertEncode_TemplateUnion =
    _test_protobuf_assertEncode<TemplateUnion>(TemplateUnion)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TemplateUnion>(input),
        message: typia.protobuf.message<TemplateUnion>(),
    });
