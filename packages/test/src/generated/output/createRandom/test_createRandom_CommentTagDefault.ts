import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_createRandom_CommentTagDefault = _test_random(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (CommentTagDefault as any)
      .RANDOM,
  ): typia.Resolved<CommentTagDefault> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      boolean: (generator?.boolean ?? $generator.boolean)(),
      number:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      string:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      text:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      boolean_and_number_and_string: $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      union_but_boolean: $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      union_but_number: $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      union_but_string: $pick([
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      vulnerable_range:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: "Minimum<3>",
            kind: "minimum",
            value: 3,
          },
          {
            name: "Maximum<5>",
            kind: "maximum",
            value: 5,
          },
        ]) ?? (generator?.number ?? $generator.number)(3, 5),
      boolean_and_number_and_template: $pick([
        () =>
          `prefix_${
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)()
          }`,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
    });
    return $ro0();
  },
  assert: (input: any): CommentTagDefault => {
    const __is = (input: any): input is CommentTagDefault => {
      const $io0 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        "string" === typeof input.text &&
        ("string" === typeof input.boolean_and_number_and_string ||
          ("number" === typeof input.boolean_and_number_and_string &&
            Number.isFinite(input.boolean_and_number_and_string)) ||
          "boolean" === typeof input.boolean_and_number_and_string) &&
        ("string" === typeof input.union_but_boolean ||
          ("number" === typeof input.union_but_boolean &&
            Number.isFinite(input.union_but_boolean)) ||
          "boolean" === typeof input.union_but_boolean) &&
        ("string" === typeof input.union_but_number ||
          ("number" === typeof input.union_but_number &&
            Number.isFinite(input.union_but_number)) ||
          "boolean" === typeof input.union_but_number) &&
        ("string" === typeof input.union_but_string ||
          ("number" === typeof input.union_but_string &&
            Number.isFinite(input.union_but_string)) ||
          "boolean" === typeof input.union_but_string) &&
        "number" === typeof input.vulnerable_range &&
        3 <= input.vulnerable_range &&
        input.vulnerable_range <= 5 &&
        null !== input.boolean_and_number_and_template &&
        undefined !== input.boolean_and_number_and_template &&
        (("number" === typeof input.boolean_and_number_and_template &&
          Number.isFinite(input.boolean_and_number_and_template)) ||
          "boolean" === typeof input.boolean_and_number_and_template ||
          ("string" === typeof input.boolean_and_number_and_template &&
            RegExp(/^prefix_(.*)/).test(
              input.boolean_and_number_and_template,
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagDefault => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.boolean ||
            $guard(_exceptionable, {
              path: _path + ".boolean",
              expected: "boolean",
              value: input.boolean,
            })) &&
          (("number" === typeof input.number &&
            Number.isFinite(input.number)) ||
            $guard(_exceptionable, {
              path: _path + ".number",
              expected: "number",
              value: input.number,
            })) &&
          ("string" === typeof input.string ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "string",
              value: input.string,
            })) &&
          ("string" === typeof input.text ||
            $guard(_exceptionable, {
              path: _path + ".text",
              expected: "string",
              value: input.text,
            })) &&
          ("string" === typeof input.boolean_and_number_and_string ||
            ("number" === typeof input.boolean_and_number_and_string &&
              Number.isFinite(input.boolean_and_number_and_string)) ||
            "boolean" === typeof input.boolean_and_number_and_string ||
            $guard(_exceptionable, {
              path: _path + ".boolean_and_number_and_string",
              expected: "(boolean | number | string)",
              value: input.boolean_and_number_and_string,
            })) &&
          ("string" === typeof input.union_but_boolean ||
            ("number" === typeof input.union_but_boolean &&
              Number.isFinite(input.union_but_boolean)) ||
            "boolean" === typeof input.union_but_boolean ||
            $guard(_exceptionable, {
              path: _path + ".union_but_boolean",
              expected: "(boolean | number | string)",
              value: input.union_but_boolean,
            })) &&
          ("string" === typeof input.union_but_number ||
            ("number" === typeof input.union_but_number &&
              Number.isFinite(input.union_but_number)) ||
            "boolean" === typeof input.union_but_number ||
            $guard(_exceptionable, {
              path: _path + ".union_but_number",
              expected: "(boolean | number | string)",
              value: input.union_but_number,
            })) &&
          ("string" === typeof input.union_but_string ||
            ("number" === typeof input.union_but_string &&
              Number.isFinite(input.union_but_string)) ||
            "boolean" === typeof input.union_but_string ||
            $guard(_exceptionable, {
              path: _path + ".union_but_string",
              expected: "(boolean | number | string)",
              value: input.union_but_string,
            })) &&
          (("number" === typeof input.vulnerable_range &&
            (3 <= input.vulnerable_range ||
              $guard(_exceptionable, {
                path: _path + ".vulnerable_range",
                expected: "number & Minimum<3>",
                value: input.vulnerable_range,
              })) &&
            (input.vulnerable_range <= 5 ||
              $guard(_exceptionable, {
                path: _path + ".vulnerable_range",
                expected: "number & Maximum<5>",
                value: input.vulnerable_range,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".vulnerable_range",
              expected: "(number & Minimum<3> & Maximum<5>)",
              value: input.vulnerable_range,
            })) &&
          (null !== input.boolean_and_number_and_template ||
            $guard(_exceptionable, {
              path: _path + ".boolean_and_number_and_template",
              expected: "(`prefix_${string}` | boolean | number)",
              value: input.boolean_and_number_and_template,
            })) &&
          (undefined !== input.boolean_and_number_and_template ||
            $guard(_exceptionable, {
              path: _path + ".boolean_and_number_and_template",
              expected: "(`prefix_${string}` | boolean | number)",
              value: input.boolean_and_number_and_template,
            })) &&
          (("number" === typeof input.boolean_and_number_and_template &&
            Number.isFinite(input.boolean_and_number_and_template)) ||
            "boolean" === typeof input.boolean_and_number_and_template ||
            ("string" === typeof input.boolean_and_number_and_template &&
              RegExp(/^prefix_(.*)/).test(
                input.boolean_and_number_and_template,
              )) ||
            $guard(_exceptionable, {
              path: _path + ".boolean_and_number_and_template",
              expected: "(`prefix_${string}` | boolean | number)",
              value: input.boolean_and_number_and_template,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagDefault",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagDefault",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
