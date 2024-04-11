import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_random_TypeTagDefault = _test_random(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<TypeTagDefault> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        boolean: (generator?.boolean ?? $generator.boolean)(),
        number:
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: "Default<1>",
              kind: "default",
              value: 1,
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
        string:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Default<"two">',
              kind: "default",
              value: "two",
            },
          ]) ?? (generator?.string ?? $generator.string)(),
        text:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: 'Default<"Very long text, can you understand it?">',
              kind: "default",
              value: "Very long text, can you understand it?",
            },
          ]) ?? (generator?.string ?? $generator.string)(),
        boolean_and_number_and_string: $pick([
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([
              {
                name: "Default<1>",
                kind: "default",
                value: 1,
              },
            ]) ?? (generator?.number ?? $generator.number)(0, 100),
          () =>
            (generator?.customs ?? $generator.customs)?.string?.([
              {
                name: 'Default<"two">',
                kind: "default",
                value: "two",
              },
            ]) ?? (generator?.string ?? $generator.string)(),
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
            (generator?.customs ?? $generator.customs)?.number?.([
              {
                name: "Default<1>",
                kind: "default",
                value: 1,
              },
            ]) ?? (generator?.number ?? $generator.number)(0, 100),
          () => (generator?.boolean ?? $generator.boolean)(),
        ])(),
        union_but_string: $pick([
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
          () =>
            (generator?.customs ?? $generator.customs)?.string?.([
              {
                name: 'Default<"two">',
                kind: "default",
                value: "two",
              },
            ]) ?? (generator?.string ?? $generator.string)(),
          () => (generator?.boolean ?? $generator.boolean)(),
        ])(),
        boolean_and_number_and_template: $pick([
          () =>
            `prefix_${(generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)()}`,
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([
              {
                name: "Default<2>",
                kind: "default",
                value: 2,
              },
            ]) ?? (generator?.number ?? $generator.number)(0, 100),
          () => (generator?.boolean ?? $generator.boolean)(),
        ])(),
      });
      return $ro0();
    })((TypeTagDefault as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TypeTagDefault => {
    const __is = (input: any): input is TypeTagDefault => {
      const $io0 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        "string" === typeof input.text &&
        (("number" === typeof input.boolean_and_number_and_string &&
          Number.isFinite(input.boolean_and_number_and_string)) ||
          "string" === typeof input.boolean_and_number_and_string ||
          "boolean" === typeof input.boolean_and_number_and_string) &&
        ("string" === typeof input.union_but_boolean ||
          ("number" === typeof input.union_but_boolean &&
            Number.isFinite(input.union_but_boolean)) ||
          "boolean" === typeof input.union_but_boolean) &&
        ("string" === typeof input.union_but_number ||
          ("number" === typeof input.union_but_number &&
            Number.isFinite(input.union_but_number)) ||
          "boolean" === typeof input.union_but_number) &&
        (("number" === typeof input.union_but_string &&
          Number.isFinite(input.union_but_string)) ||
          "string" === typeof input.union_but_string ||
          "boolean" === typeof input.union_but_string) &&
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
      ): input is TypeTagDefault => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.boolean ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "(boolean & Default<false>)",
                value: input.boolean,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.number &&
            Number.isFinite(input.number)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".number",
                expected: "(number & Default<1>)",
                value: input.number,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".string",
                expected: '(string & Default<"two">)',
                value: input.string,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.text ||
            $guard(
              _exceptionable,
              {
                path: _path + ".text",
                expected:
                  '(string & Default<"Very long text, can you understand it?">)',
                value: input.text,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.boolean_and_number_and_string &&
            Number.isFinite(input.boolean_and_number_and_string)) ||
            "string" === typeof input.boolean_and_number_and_string ||
            "boolean" === typeof input.boolean_and_number_and_string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean_and_number_and_string",
                expected:
                  '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                value: input.boolean_and_number_and_string,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.union_but_boolean ||
            ("number" === typeof input.union_but_boolean &&
              Number.isFinite(input.union_but_boolean)) ||
            "boolean" === typeof input.union_but_boolean ||
            $guard(
              _exceptionable,
              {
                path: _path + ".union_but_boolean",
                expected: "((boolean & Default<false>) | number | string)",
                value: input.union_but_boolean,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.union_but_number ||
            ("number" === typeof input.union_but_number &&
              Number.isFinite(input.union_but_number)) ||
            "boolean" === typeof input.union_but_number ||
            $guard(
              _exceptionable,
              {
                path: _path + ".union_but_number",
                expected: "((number & Default<1>) | boolean | string)",
                value: input.union_but_number,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.union_but_string &&
            Number.isFinite(input.union_but_string)) ||
            "string" === typeof input.union_but_string ||
            "boolean" === typeof input.union_but_string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".union_but_string",
                expected: '((string & Default<"two">) | boolean | number)',
                value: input.union_but_string,
              },
              errorFactory,
            )) &&
          (null !== input.boolean_and_number_and_template ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean_and_number_and_template",
                expected:
                  "((boolean & Default<false>) | (number & Default<2>) | `[object Object]${string}`)",
                value: input.boolean_and_number_and_template,
              },
              errorFactory,
            )) &&
          (undefined !== input.boolean_and_number_and_template ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean_and_number_and_template",
                expected:
                  "((boolean & Default<false>) | (number & Default<2>) | `[object Object]${string}`)",
                value: input.boolean_and_number_and_template,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.boolean_and_number_and_template &&
            Number.isFinite(input.boolean_and_number_and_template)) ||
            "boolean" === typeof input.boolean_and_number_and_template ||
            ("string" === typeof input.boolean_and_number_and_template &&
              RegExp(/^prefix_(.*)/).test(
                input.boolean_and_number_and_template,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean_and_number_and_template",
                expected:
                  "((boolean & Default<false>) | (number & Default<2>) | `[object Object]${string}`)",
                value: input.boolean_and_number_and_template,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TypeTagDefault",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TypeTagDefault",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
