import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_createRandom_ArrayRecursive = _test_random(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ArrayRecursive as any).RANDOM,
  ): typia.Resolved<ArrayRecursive> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = true, _depth: number = 0): any => ({
      children:
        _recursive && 5 < _depth
          ? []
          : 5 >= _depth
          ? (generator?.array ?? $generator.array)(() =>
              $ro0(true, _recursive ? 1 + _depth : _depth),
            )
          : [],
      id:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      code:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      sequence:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      created_at: $ro1(true, _recursive ? 1 + _depth : _depth),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      time:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      zone:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
    });
    return $ro0();
  },
  assert: (input: any): ArrayRecursive => {
    const __is = (input: any): input is ArrayRecursive => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.children) &&
        input.children.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.code &&
        "number" === typeof input.sequence &&
        Number.isFinite(input.sequence) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayRecursive => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.children) ||
            $guard(_exceptionable, {
              path: _path + ".children",
              expected: "Array<ArrayRecursive.ICategory>",
              value: input.children,
            })) &&
            input.children.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".children[" + _index1 + "]",
                    expected: "ArrayRecursive.ICategory",
                    value: elem,
                  })) &&
                  $ao0(
                    elem,
                    _path + ".children[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".children[" + _index1 + "]",
                  expected: "ArrayRecursive.ICategory",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".children",
              expected: "Array<ArrayRecursive.ICategory>",
              value: input.children,
            })) &&
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          ("string" === typeof input.code ||
            $guard(_exceptionable, {
              path: _path + ".code",
              expected: "string",
              value: input.code,
            })) &&
          (("number" === typeof input.sequence &&
            Number.isFinite(input.sequence)) ||
            $guard(_exceptionable, {
              path: _path + ".sequence",
              expected: "number",
              value: input.sequence,
            })) &&
          (((("object" === typeof input.created_at &&
            null !== input.created_at) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ArrayRecursive.ITimestamp",
              value: input.created_at,
            })) &&
            $ao1(
              input.created_at,
              _path + ".created_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ArrayRecursive.ITimestamp",
              value: input.created_at,
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.time && Number.isFinite(input.time)) ||
            $guard(_exceptionable, {
              path: _path + ".time",
              expected: "number",
              value: input.time,
            })) &&
          (("number" === typeof input.zone && Number.isFinite(input.zone)) ||
            $guard(_exceptionable, {
              path: _path + ".zone",
              expected: "number",
              value: input.zone,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ArrayRecursive.ICategory",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ArrayRecursive.ICategory",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
