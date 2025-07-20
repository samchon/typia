import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_assertEncodeCustom_ClassPropertyAssignment =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
      encode: (input) =>
        typia.protobuf.assertEncode<ClassPropertyAssignment>(
          input,
          (p) => new CustomGuardError(p),
        ),
      decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
      message: typia.protobuf.message<ClassPropertyAssignment>(),
    });
