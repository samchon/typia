import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_TemplateConstant =
  _test_protobuf_assertEncode(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)({
    encode: (input) =>
      typia.protobuf.assertEncode<TemplateConstant>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TemplateConstant>(),
    message: typia.protobuf.message<TemplateConstant>(),
  });
