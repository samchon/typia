import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_createAssert_ToJsonUnion = _test_assert(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input: any): ToJsonUnion => {
  const __is = (input: any): input is ToJsonUnion => {
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
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ToJsonUnion => {
      const $guard = (typia.createAssert as any).guard;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        (("number" === typeof input.id && Number.isFinite(input.id)) ||
          $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id,
          })) &&
        ("string" === typeof input.mobile ||
          $guard(_exceptionable, {
            path: _path + ".mobile",
            expected: "string",
            value: input.mobile,
          })) &&
        ("string" === typeof input.name ||
          $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name,
          }));
      const $ao1 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        "function" === typeof input.toJSON ||
        $guard(_exceptionable, {
          path: _path + ".toJSON",
          expected: "unknown",
          value: input.toJSON,
        });
      const $ao2 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        "function" === typeof input.toJSON ||
        $guard(_exceptionable, {
          path: _path + ".toJSON",
          expected: "unknown",
          value: input.toJSON,
        });
      const $ao3 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        "function" === typeof input.toJSON ||
        $guard(_exceptionable, {
          path: _path + ".toJSON",
          expected: "unknown",
          value: input.toJSON,
        });
      const $au0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): any =>
        (() => {
          if (undefined !== input.id)
            return $ao0(input, _path, true && _exceptionable);
          else
            return (
              $ao3(input, _path, false && _exceptionable) ||
              $ao2(input, _path, false && _exceptionable) ||
              $ao1(input, _path, false && _exceptionable) ||
              $guard(_exceptionable, {
                path: _path,
                expected:
                  "(ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<boolean>)",
                value: input,
              })
            );
        })();
      return (
        ((Array.isArray(input) ||
          $guard(true, {
            path: _path + "",
            expected: "ToJsonUnion",
            value: input,
          })) &&
          input.every(
            (elem: any, _index1: number) =>
              (null !== elem ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                  value: elem,
                })) &&
              (undefined !== elem ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                  value: elem,
                })) &&
              ("string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                ((("object" === typeof elem && null !== elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                    value: elem,
                  })) &&
                  $au0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                  value: elem,
                })),
          )) ||
        $guard(true, {
          path: _path + "",
          expected: "ToJsonUnion",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
