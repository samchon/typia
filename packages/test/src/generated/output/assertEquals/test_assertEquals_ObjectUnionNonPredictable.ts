import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_assertEquals_ObjectUnionNonPredictable = _test_assertEquals(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
  ((input: any): ObjectUnionNonPredictable => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectUnionNonPredictable => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io1(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io2(input.value, true && _exceptionable) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $iu0(input.value, true && _exceptionable) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io4(input.value, true && _exceptionable) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
        "boolean" === typeof input.value &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io6(input.value, true && _exceptionable) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io6 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io7 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io8(input.value, true && _exceptionable) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io8 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.value &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $iu0 = (input: any, _exceptionable: boolean = true): any =>
        (() => {
          if ($io7(input, false && _exceptionable))
            return $io7(input, true && _exceptionable);
          else if ($io5(input, false && _exceptionable))
            return $io5(input, true && _exceptionable);
          else if ($io3(input, false && _exceptionable))
            return $io3(input, true && _exceptionable);
          else return false;
        })();
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectUnionNonPredictable => {
        const $guard = (typia.assertEquals as any).guard;
        const $join = (typia.assertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected:
                "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected:
                      "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected:
                    "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected:
                "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<ObjectUnionNonPredictable.IUnion>",
              value: input.value,
            })) &&
            $ao2(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<ObjectUnionNonPredictable.IUnion>",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected:
                "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
              value: input.value,
            })) &&
            $au0(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected:
                "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<boolean>",
              value: input.value,
            })) &&
            $ao4(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<boolean>",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "boolean",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<number>",
              value: input.value,
            })) &&
            $ao6(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<number>",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.value && Number.isFinite(input.value)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "number",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<string>",
              value: input.value,
            })) &&
            $ao8(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "IPointer<string>",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao8 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if ($ao7(input, _path, false && _exceptionable))
              return $ao7(input, _path, true && _exceptionable);
            else if ($ao5(input, _path, false && _exceptionable))
              return $ao5(input, _path, true && _exceptionable);
            else if ($ao3(input, _path, false && _exceptionable))
              return $ao3(input, _path, true && _exceptionable);
            else
              return $guard(_exceptionable, {
                path: _path,
                expected:
                  "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                value: input,
              });
          })();
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectUnionNonPredictable",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectUnionNonPredictable",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input),
);
