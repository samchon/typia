import typia from "typia";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_misc_validatePrune_ConstantAtomicAbsorbed =
  _test_misc_validatePrune("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input) =>
    ((input: any): typia.IValidation<ConstantAtomicAbsorbed> => {
      const validate = (
        input: any,
      ): typia.IValidation<ConstantAtomicAbsorbed> => {
        const errors = [] as any[];
        const __is = (input: any): input is ConstantAtomicAbsorbed => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.misc.validatePrune as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantAtomicAbsorbed => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.id ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: '(string & Default<"something">)',
                    value: input.id,
                  }),
                ("number" === typeof input.age && Number.isFinite(input.age)) ||
                  $report(_exceptionable, {
                    path: _path + ".age",
                    expected: "(number & Default<20>)",
                    value: input.age,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicAbsorbed",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ConstantAtomicAbsorbed",
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
      const prune = (input: ConstantAtomicAbsorbed): void => {
        const $po0 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if ("id" === key || "age" === key) continue;
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
