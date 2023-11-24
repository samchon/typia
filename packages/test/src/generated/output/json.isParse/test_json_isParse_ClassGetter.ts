import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_isParse_ClassGetter = _test_json_isParse(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input) =>
  ((input: any): typia.Primitive<ClassGetter> => {
    const is = (input: any): input is ClassGetter => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        (null === input.dead || "boolean" === typeof input.dead);
      return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
