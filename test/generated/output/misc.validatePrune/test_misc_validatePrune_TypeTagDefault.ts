import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_misc_validatePrune_TypeTagDefault = _test_misc_validatePrune(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  ((input: any): typia.IValidation<TypeTagDefault> => {
    const validate = (input: any): typia.IValidation<TypeTagDefault> => {
      const errors = [] as any[];
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
      if (false === __is(input)) {
        const $report = (typia.misc.validatePrune as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TypeTagDefault => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              "boolean" === typeof input.boolean ||
                $report(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "(boolean & Default<false>)",
                  value: input.boolean,
                }),
              ("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
                $report(_exceptionable, {
                  path: _path + ".number",
                  expected: "(number & Default<1>)",
                  value: input.number,
                }),
              "string" === typeof input.string ||
                $report(_exceptionable, {
                  path: _path + ".string",
                  expected: '(string & Default<"two">)',
                  value: input.string,
                }),
              "string" === typeof input.text ||
                $report(_exceptionable, {
                  path: _path + ".text",
                  expected:
                    '(string & Default<"Very long text, can you understand it?">)',
                  value: input.text,
                }),
              ("number" === typeof input.boolean_and_number_and_string &&
                Number.isFinite(input.boolean_and_number_and_string)) ||
                "string" === typeof input.boolean_and_number_and_string ||
                "boolean" === typeof input.boolean_and_number_and_string ||
                $report(_exceptionable, {
                  path: _path + ".boolean_and_number_and_string",
                  expected:
                    '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                  value: input.boolean_and_number_and_string,
                }),
              "string" === typeof input.union_but_boolean ||
                ("number" === typeof input.union_but_boolean &&
                  Number.isFinite(input.union_but_boolean)) ||
                "boolean" === typeof input.union_but_boolean ||
                $report(_exceptionable, {
                  path: _path + ".union_but_boolean",
                  expected: "((boolean & Default<false>) | number | string)",
                  value: input.union_but_boolean,
                }),
              "string" === typeof input.union_but_number ||
                ("number" === typeof input.union_but_number &&
                  Number.isFinite(input.union_but_number)) ||
                "boolean" === typeof input.union_but_number ||
                $report(_exceptionable, {
                  path: _path + ".union_but_number",
                  expected: "((number & Default<1>) | boolean | string)",
                  value: input.union_but_number,
                }),
              ("number" === typeof input.union_but_string &&
                Number.isFinite(input.union_but_string)) ||
                "string" === typeof input.union_but_string ||
                "boolean" === typeof input.union_but_string ||
                $report(_exceptionable, {
                  path: _path + ".union_but_string",
                  expected: '((string & Default<"two">) | boolean | number)',
                  value: input.union_but_string,
                }),
              (null !== input.boolean_and_number_and_template ||
                $report(_exceptionable, {
                  path: _path + ".boolean_and_number_and_template",
                  expected:
                    "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                  value: input.boolean_and_number_and_template,
                })) &&
                (undefined !== input.boolean_and_number_and_template ||
                  $report(_exceptionable, {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  })) &&
                (("number" === typeof input.boolean_and_number_and_template &&
                  Number.isFinite(input.boolean_and_number_and_template)) ||
                  "boolean" === typeof input.boolean_and_number_and_template ||
                  ("string" === typeof input.boolean_and_number_and_template &&
                    RegExp(/^prefix_(.*)/).test(
                      input.boolean_and_number_and_template,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  })),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input && null !== input) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagDefault",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "TypeTagDefault",
              value: input,
            })
          );
        })(input, "$input", true);
      }
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    };
    const prune = (input: TypeTagDefault): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "boolean" === key ||
            "number" === key ||
            "string" === key ||
            "text" === key ||
            "boolean_and_number_and_string" === key ||
            "union_but_boolean" === key ||
            "union_but_number" === key ||
            "union_but_string" === key ||
            "boolean_and_number_and_template" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
  })(input),
);
