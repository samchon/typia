import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_is_ToJsonAtomicUnion = _test_is(
  "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
  ((input: any): input is ToJsonAtomicUnion => {
    const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      )
    );
  })(input),
);
