import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_createValidateStringify_ConstantAtomicTagged =
  _test_json_validateStringify("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input: ConstantAtomicTagged): typia.IValidation<string> => {
    const validate = (input: any): typia.IValidation<ConstantAtomicTagged> => {
      const errors = [] as any[];
      const __is = (input: any): input is ConstantAtomicTagged => {
        const $io0 = (input: any): boolean =>
          ("latest" === input.id ||
            ("string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ))) &&
          (-1 === input.age ||
            ("number" === typeof input.age &&
              Math.floor(input.age) === input.age &&
              0 <= input.age &&
              input.age <= 4294967295 &&
              input.age <= 100));
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input)) {
        const $report = (typia.json.createValidateStringify as any).report(
          errors,
        );
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicTagged => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              "latest" === input.id ||
                ("string" === typeof input.id &&
                  (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: 'string & Format<"uuid">',
                      value: input.id,
                    }))) ||
                $report(_exceptionable, {
                  path: _path + ".id",
                  expected: '("latest" | (string & Format<"uuid">))',
                  value: input.id,
                }),
              -1 === input.age ||
                ("number" === typeof input.age &&
                  ((Math.floor(input.age) === input.age &&
                    0 <= input.age &&
                    input.age <= 4294967295) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: 'number & Type<"uint32">',
                      value: input.age,
                    })) &&
                  (input.age <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "number & Maximum<100>",
                      value: input.age,
                    }))) ||
                $report(_exceptionable, {
                  path: _path + ".age",
                  expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
                  value: input.age,
                }),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input && null !== input) ||
              $report(true, {
                path: _path + "",
                expected: "ConstantAtomicTagged",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "ConstantAtomicTagged",
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
    const stringify = (input: ConstantAtomicTagged): string => {
      const $string = (typia.json.createValidateStringify as any).string;
      const $throws = (typia.json.createValidateStringify as any).throws;
      const $number = (typia.json.createValidateStringify as any).number;
      const $so0 = (input: any): any =>
        `{"id":${(() => {
          if ("string" === typeof input.id) return $string(input.id);
          if ("string" === typeof input.id) return '"' + input.id + '"';
          if (
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            )
          )
            return $string(input.id);
          $throws({
            expected: '("latest" | (string & Format<"uuid">))',
            value: input.id,
          });
        })()},"age":${(() => {
          if ("number" === typeof input.age) return $number(input.age);
          if (
            "number" === typeof input.age &&
            Math.floor(input.age) === input.age &&
            0 <= input.age &&
            input.age <= 4294967295 &&
            input.age <= 100
          )
            return $number(input.age);
          $throws({
            expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
            value: input.age,
          });
        })()}}`;
      return $so0(input);
    };
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
  });
