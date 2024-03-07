import typia from "typia";
import { _test_validate } from "../../../internal/_test_validate";
import { DynamicArray } from "../../../structures/DynamicArray";
export const test_createValidate_DynamicArray = _test_validate(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input: any): typia.IValidation<DynamicArray> => {
  const errors = [] as any[];
  const __is = (input: any): input is DynamicArray => {
    const $io0 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      false === Array.isArray(input.value) &&
      $io1(input.value);
    const $io1 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        return (
          Array.isArray(value) &&
          value.every((elem: any) => "string" === typeof elem)
        );
      });
    return "object" === typeof input && null !== input && $io0(input);
  };
  if (false === __is(input)) {
    const $report = (typia.createValidate as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is DynamicArray => {
      const $join = (typia.createValidate as any).join;
      const $vo0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          ((("object" === typeof input.value &&
            null !== input.value &&
            false === Array.isArray(input.value)) ||
            $report(_exceptionable, {
              path: _path + ".value",
              expected: "__type",
              value: input.value,
            })) &&
            $vo1(input.value, _path + ".value", true && _exceptionable)) ||
            $report(_exceptionable, {
              path: _path + ".value",
              expected: "__type",
              value: input.value,
            }),
        ].every((flag: boolean) => flag);
      const $vo1 = (
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
                  ((Array.isArray(value) ||
                    $report(_exceptionable, {
                      path: _path + $join(key),
                      expected: "Array<string>",
                      value: value,
                    })) &&
                    value
                      .map(
                        (elem: any, _index1: number) =>
                          "string" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + $join(key) + "[" + _index1 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "Array<string>",
                    value: value,
                  })
                );
              })
              .every((flag: boolean) => flag),
        ].every((flag: boolean) => flag);
      return (
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "DynamicArray",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "DynamicArray",
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
});
