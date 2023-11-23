import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_misc_assertPrune_TupleRestObject = _test_misc_assertPrune(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  ((input: any): TupleRestObject => {
    const assert = (input: any): TupleRestObject => {
      const __is = (input: any): input is TupleRestObject => {
        const $io0 = (input: any): boolean => "string" === typeof input.value;
        return (
          Array.isArray(input) &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Number.isFinite(input[1]) &&
          Array.isArray(input.slice(2)) &&
          input
            .slice(2)
            .every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TupleRestObject => {
          const $guard = (typia.misc.assertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            "string" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            });
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "TupleRestObject",
                value: input,
              })) &&
              ("boolean" === typeof input[0] ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "boolean",
                  value: input[0],
                })) &&
              (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "number",
                  value: input[1],
                })) &&
              (((Array.isArray(input.slice(2)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "...TupleRestObject.IObject",
                  value: input.slice(2),
                })) &&
                input.slice(2).every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(true, {
                        path: _path + "[" + (2 + _index1) + "]",
                        expected: "TupleRestObject.IObject",
                        value: elem,
                      })) &&
                      $ao0(elem, _path + "[" + (2 + _index1) + "]", true)) ||
                    $guard(true, {
                      path: _path + "[" + (2 + _index1) + "]",
                      expected: "TupleRestObject.IObject",
                      value: elem,
                    }),
                )) ||
                $guard(true, {
                  path: _path + "",
                  expected: "...TupleRestObject.IObject",
                  value: input.slice(2),
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "TupleRestObject",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: TupleRestObject): void => {
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
    };
    assert(input);
    prune(input);
    return input;
  })(input),
);
