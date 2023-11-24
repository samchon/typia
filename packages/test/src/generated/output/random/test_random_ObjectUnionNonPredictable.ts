import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_random_ObjectUnionNonPredictable = _test_random(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectUnionNonPredictable> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.array ?? $generator.array)(() =>
          $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        ),
      });
      const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
      });
      const $ro2 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: $pick([
          () => $ro7(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro3(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
      });
      const $ro3 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: $ro4(_recursive, _recursive ? 1 + _depth : _depth),
      });
      const $ro4 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.boolean ?? $generator.boolean)(),
      });
      const $ro5 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: $ro6(_recursive, _recursive ? 1 + _depth : _depth),
      });
      const $ro6 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      });
      const $ro7 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: $ro8(_recursive, _recursive ? 1 + _depth : _depth),
      });
      const $ro8 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      });
      return $ro0();
    })((ObjectUnionNonPredictable as any).RANDOM),
  assert: (input: any): ObjectUnionNonPredictable => {
    const __is = (input: any): input is ObjectUnionNonPredictable => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io2(input.value);
      const $io2 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $iu0(input.value);
      const $io3 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "boolean" === typeof (input.value as any).value;
      const $io5 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "number" === typeof (input.value as any).value &&
        Number.isFinite((input.value as any).value);
      const $io7 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "string" === typeof (input.value as any).value;
      const $iu0 = (input: any): any =>
        (() => {
          if ($io7(input)) return $io7(input);
          else if ($io5(input)) return $io5(input);
          else if ($io3(input)) return $io3(input);
          else return false;
        })();
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectUnionNonPredictable => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.value) ||
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
          });
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
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
          });
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
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
          });
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
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
          });
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "boolean" === typeof input.value ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value,
          });
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
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
          });
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("number" === typeof input.value && Number.isFinite(input.value)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value,
          });
        const $ao7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
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
          });
        const $ao8 = (
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
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao7(input, _path, false && _exceptionable) ||
          $ao5(input, _path, false && _exceptionable) ||
          $ao3(input, _path, false && _exceptionable) ||
          $guard(_exceptionable, {
            path: _path,
            expected:
              "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
            value: input,
          });
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
  },
});
