import typia from "typia";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
export const test_json_validateParse_ObjectDynamic = _test_json_validateParse(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input) =>
  ((input: string): typia.IValidation<typia.Primitive<ObjectDynamic>> => {
    const validate = (input: any): typia.IValidation<ObjectDynamic> => {
      const errors = [] as any[];
      const __is = (input: any): input is ObjectDynamic => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value
            );
          });
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input)) {
        const $report = (typia.json.validateParse as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectDynamic => {
          const $join = (typia.json.validateParse as any).join;
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              false === _exceptionable ||
                Object.keys(input)
                  .map((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    return (
                      "string" === typeof value ||
                      ("number" === typeof value && Number.isFinite(value)) ||
                      "boolean" === typeof value ||
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "(boolean | number | string)",
                        value: value,
                      })
                    );
                  })
                  .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectDynamic",
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
    const output = JSON.parse(input);
    return validate(output) as any;
  })(input),
);
