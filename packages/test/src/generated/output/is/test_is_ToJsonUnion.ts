import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_is_ToJsonUnion = _test_is("ToJsonUnion")<ToJsonUnion>(
  ToJsonUnion,
)((input) =>
  ((input: any): input is ToJsonUnion => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.id &&
      Number.isFinite(input.id) &&
      "string" === typeof input.mobile &&
      "string" === typeof input.name;
    const $io1 = (input: any): boolean => "function" === typeof input.toJSON;
    const $io2 = (input: any): boolean => "function" === typeof input.toJSON;
    const $io3 = (input: any): boolean => "function" === typeof input.toJSON;
    const $iu0 = (input: any): any =>
      (() => {
        if (undefined !== input.id) return $io0(input);
        else
          return (() => {
            if ($io3(input)) return $io3(input);
            else if ($io2(input)) return $io2(input);
            else if ($io1(input)) return $io1(input);
            else return false;
          })();
      })();
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) =>
          null !== elem &&
          undefined !== elem &&
          ("string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)) ||
            ("object" === typeof elem && null !== elem && $iu0(elem))),
      )
    );
  })(input),
);
