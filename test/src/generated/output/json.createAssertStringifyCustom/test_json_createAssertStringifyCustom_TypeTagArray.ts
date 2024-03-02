import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_createAssertStringifyCustom_TypeTagArray =
  _test_json_assertStringify(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): TypeTagArray => {
        const __is = (input: any): input is TypeTagArray => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 <= input.items.length &&
            input.items.length <= 3 &&
            input.items.every(
              (elem: any) =>
                "string" === typeof elem &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
              (elem: any) =>
                "number" === typeof elem && Number.isFinite(elem) && 3 <= elem,
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            input.both.length <= 7 &&
            input.both.every(
              (elem: any) =>
                "string" === typeof elem &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            input.equal.length <= 10 &&
            input.equal.every(
              (elem: any) =>
                "number" === typeof elem && 10 <= elem && elem <= 10,
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagArray => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<TypeTagArray.Type>",
                    value: input.value,
                  },
                  errorFactory,
                )) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagArray.Type",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "TypeTagArray.Type",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<TypeTagArray.Type>",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((Array.isArray(input.items) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items",
                    expected:
                      '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                    value: input.items,
                  },
                  errorFactory,
                )) &&
                (3 <= input.items.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "Array<> & MinItems<3>",
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                (input.items.length <= 3 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "Array<> & MaxItems<3>",
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                input.items.every(
                  (elem: any, _index2: number) =>
                    ("string" === typeof elem &&
                      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        elem,
                      ) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".items[" + _index2 + "]",
                            expected: 'string & Format<"uuid">',
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".items[" + _index2 + "]",
                        expected: '(string & Format<"uuid">)',
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items",
                    expected:
                      '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                    value: input.items,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.minItems) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minItems",
                    expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                    value: input.minItems,
                  },
                  errorFactory,
                )) &&
                (3 <= input.minItems.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minItems",
                      expected: "Array<> & MinItems<3>",
                      value: input.minItems,
                    },
                    errorFactory,
                  )) &&
                input.minItems.every(
                  (elem: any, _index3: number) =>
                    ("number" === typeof elem &&
                      (Number.isFinite(elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".minItems[" + _index3 + "]",
                            expected: "number",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      (3 <= elem ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".minItems[" + _index3 + "]",
                            expected: "number & Minimum<3>",
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minItems[" + _index3 + "]",
                        expected: "(number & Minimum<3>)",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".minItems",
                    expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                    value: input.minItems,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.both) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".both",
                    expected:
                      '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                    value: input.both,
                  },
                  errorFactory,
                )) &&
                (3 <= input.both.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected: "Array<> & MinItems<3>",
                      value: input.both,
                    },
                    errorFactory,
                  )) &&
                (input.both.length <= 7 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected: "Array<> & MaxItems<7>",
                      value: input.both,
                    },
                    errorFactory,
                  )) &&
                input.both.every(
                  (elem: any, _index4: number) =>
                    ("string" === typeof elem &&
                      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        elem,
                      ) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".both[" + _index4 + "]",
                            expected: 'string & Format<"uuid">',
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".both[" + _index4 + "]",
                        expected: '(string & Format<"uuid">)',
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".both",
                    expected:
                      '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                    value: input.both,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.equal) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".equal",
                    expected:
                      "(Array<number & Minimum<10> & Maximum<10>> & MinItems<10> & MaxItems<10>)",
                    value: input.equal,
                  },
                  errorFactory,
                )) &&
                (10 <= input.equal.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "Array<> & MinItems<10>",
                      value: input.equal,
                    },
                    errorFactory,
                  )) &&
                (input.equal.length <= 10 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "Array<> & MaxItems<10>",
                      value: input.equal,
                    },
                    errorFactory,
                  )) &&
                input.equal.every(
                  (elem: any, _index5: number) =>
                    ("number" === typeof elem &&
                      (10 <= elem ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".equal[" + _index5 + "]",
                            expected: "number & Minimum<10>",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      (elem <= 10 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".equal[" + _index5 + "]",
                            expected: "number & Maximum<10>",
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal[" + _index5 + "]",
                        expected: "(number & Minimum<10> & Maximum<10>)",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".equal",
                    expected:
                      "(Array<number & Minimum<10> & Maximum<10>> & MinItems<10> & MaxItems<10>)",
                    value: input.equal,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagArray",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TypeTagArray",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: TypeTagArray): string => {
        const $io1 = (input: any): boolean =>
          Array.isArray(input.items) &&
          3 <= input.items.length &&
          input.items.length <= 3 &&
          input.items.every(
            (elem: any) =>
              "string" === typeof elem &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                elem,
              ),
          ) &&
          Array.isArray(input.minItems) &&
          3 <= input.minItems.length &&
          input.minItems.every(
            (elem: any) => "number" === typeof elem && 3 <= elem,
          ) &&
          Array.isArray(input.both) &&
          3 <= input.both.length &&
          input.both.length <= 7 &&
          input.both.every(
            (elem: any) =>
              "string" === typeof elem &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                elem,
              ),
          ) &&
          Array.isArray(input.equal) &&
          10 <= input.equal.length &&
          input.equal.length <= 10 &&
          input.equal.every(
            (elem: any) => "number" === typeof elem && 10 <= elem && elem <= 10,
          );
        const $string = (typia.json.createAssertStringify as any).string;
        const $number = (typia.json.createAssertStringify as any).number;
        const $so0 = (input: any): any =>
          `{"value":${`[${input.value
            .map((elem: any) => $so1(elem))
            .join(",")}]`}}`;
        const $so1 = (input: any): any =>
          `{"items":${`[${input.items
            .map((elem: any) => $string(elem))
            .join(",")}]`},"minItems":${`[${input.minItems
            .map((elem: any) => $number(elem))
            .join(",")}]`},"both":${`[${input.both
            .map((elem: any) => $string(elem))
            .join(",")}]`},"equal":${`[${input.equal
            .map((elem: any) => $number(elem))
            .join(",")}]`}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    },
  );
