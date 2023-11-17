import typia from "../../../../src";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_createValidateParse_ObjectUnionNonPredictable =
  _test_json_validateParse(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    (
      input: string,
    ): typia.IValidation<typia.Primitive<ObjectUnionNonPredictable>> => {
      const validate = (
        input: any,
      ): typia.IValidation<ObjectUnionNonPredictable> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = (typia.json.createValidateParse as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectUnionNonPredictable => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected:
                      "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                    value: input.value,
                  })) &&
                  input.value
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".value[" + _index1 + "]",
                            expected:
                              "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                            value: elem,
                          })) &&
                          $vo1(
                            elem,
                            _path + ".value[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected:
                            "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected:
                      "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.value && null !== input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<ObjectUnionNonPredictable.IUnion>",
                    value: input.value,
                  })) &&
                  $vo2(
                    input.value,
                    _path + ".value",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<ObjectUnionNonPredictable.IUnion>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.value && null !== input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected:
                      "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                    value: input.value,
                  })) &&
                  $vu0(
                    input.value,
                    _path + ".value",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected:
                      "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.value && null !== input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<boolean>",
                    value: input.value,
                  })) &&
                  $vo4(
                    input.value,
                    _path + ".value",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<boolean>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "boolean" === typeof input.value ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "boolean",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo5 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.value && null !== input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<number>",
                    value: input.value,
                  })) &&
                  $vo6(
                    input.value,
                    _path + ".value",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<number>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo6 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.value &&
                  Number.isFinite(input.value)) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "number",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo7 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.value && null !== input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<string>",
                    value: input.value,
                  })) &&
                  $vo8(
                    input.value,
                    _path + ".value",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "IPointer<string>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo8 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.value ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vu0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              $vo7(input, _path, false && _exceptionable) ||
              $vo5(input, _path, false && _exceptionable) ||
              $vo3(input, _path, false && _exceptionable);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectUnionNonPredictable",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectUnionNonPredictable",
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
    },
  );
