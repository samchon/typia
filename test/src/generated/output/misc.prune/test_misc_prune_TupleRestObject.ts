import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_misc_prune_TupleRestObject = _test_misc_prune(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  ((input: TupleRestObject): void => {
    const $io0 = (input: any): boolean => "string" === typeof input.value;
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po0(elem);
      });
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    if (
      Array.isArray(input) &&
      "boolean" === typeof input[0] &&
      "number" === typeof input[1] &&
      Array.isArray(input.slice(2)) &&
      input
        .slice(2)
        .every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
    ) {
      if (Array.isArray(input.slice(2))) $pp0(input.slice(2));
    }
  })(input),
);
