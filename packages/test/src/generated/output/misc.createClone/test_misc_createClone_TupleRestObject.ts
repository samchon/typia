import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_misc_createClone_TupleRestObject = _test_misc_clone(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)(
  (input: TupleRestObject): typia.Resolved<TupleRestObject> => {
    const $io0 = (input: any): boolean => "string" === typeof input.value;
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co0(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      value: input.value as any,
    });
    return Array.isArray(input) &&
      "boolean" === typeof input[0] &&
      "number" === typeof input[1] &&
      Array.isArray(input.slice(2)) &&
      input
        .slice(2)
        .every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      ? ([
          input[0] as any,
          input[1] as any,
          ...(Array.isArray(input.slice(2))
            ? $cp0(input.slice(2))
            : (input.slice(2) as any)),
        ] as any)
      : (input as any);
  },
);
