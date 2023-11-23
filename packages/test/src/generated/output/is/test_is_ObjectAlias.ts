import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_is_ObjectAlias = _test_is("ObjectAlias")<ObjectAlias>(
  ObjectAlias,
)((input) =>
  ((input: any): input is ObjectAlias => {
    const $io0 = (input: any): boolean =>
      (null === input.id || "string" === typeof input.id) &&
      "string" === typeof input.email &&
      "string" === typeof input.name &&
      (null === input.sex ||
        2 === input.sex ||
        1 === input.sex ||
        "male" === input.sex ||
        "female" === input.sex) &&
      (null === input.age ||
        ("number" === typeof input.age && Number.isFinite(input.age))) &&
      (null === input.dead || "boolean" === typeof input.dead);
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      )
    );
  })(input),
);
