import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_misc_clone_TypeTagArrayUnion = _test_misc_clone(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  ((input: TypeTagArrayUnion): typia.Resolved<TypeTagArrayUnion> => {
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co0(elem) : (elem as any),
      );
    const $cp1 = (input: any) => input.map((elem: any) => elem as any);
    const $cp2 = (input: any) => input.map((elem: any) => elem as any);
    const $cp3 = (input: any) => input.map((elem: any) => elem as any);
    const $co0 = (input: any): any => ({
      items: Array.isArray(input.items)
        ? $cp1(input.items)
        : (input.items as any),
      minItems: Array.isArray(input.minItems)
        ? $cp2(input.minItems)
        : (input.minItems as any),
      maxItems: Array.isArray(input.maxItems)
        ? $cp3(input.maxItems)
        : (input.maxItems as any),
      both: Array.isArray(input.both) ? $cp1(input.both) : (input.both as any),
    });
    return Array.isArray(input) ? $cp0(input) : (input as any);
  })(input),
);
