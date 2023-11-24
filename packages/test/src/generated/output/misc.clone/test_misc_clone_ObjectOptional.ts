import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_misc_clone_ObjectOptional = _test_misc_clone(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  ((input: ObjectOptional): typia.Resolved<ObjectOptional> => {
    const $co0 = (input: any): any => ({
      id: input.id as any,
      name: input.name as any,
      email: input.email as any,
      sequence: input.sequence as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
