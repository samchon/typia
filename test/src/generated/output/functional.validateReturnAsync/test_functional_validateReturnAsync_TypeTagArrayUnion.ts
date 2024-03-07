import typia from "typia";
import { _test_functional_validateReturnAsync } from "../../../internal/_test_functional_validateReturnAsync";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
export const test_functional_validateReturnAsync_TypeTagArrayUnion =
  _test_functional_validateReturnAsync("TypeTagArrayUnion")(TypeTagArrayUnion)(
    (p: (input: TypeTagArrayUnion) => Promise<TypeTagArrayUnion>) =>
      async (
        input: TypeTagArrayUnion,
      ): Promise<import("typia").IValidation<TypeTagArrayUnion>> => {
        const result = ((input: any): typia.IValidation<TypeTagArrayUnion> => {
          const errors = [] as any[];
          const __is = (input: any): input is TypeTagArrayUnion => {
            const $io0 = (input: any): boolean =>
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
                  "number" === typeof elem &&
                  Number.isFinite(elem) &&
                  3 <= elem,
              ) &&
              Array.isArray(input.maxItems) &&
              input.maxItems.length <= 7 &&
              input.maxItems.every(
                (elem: any) =>
                  ("string" === typeof elem && elem.length <= 7) ||
                  ("number" === typeof elem &&
                    Number.isFinite(elem) &&
                    elem <= 7),
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
              );
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagArrayUnion => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((Array.isArray(input.items) ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                      value: input.items,
                    })) &&
                    (3 <= input.items.length ||
                      $report(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<> & MinItems<3>",
                        value: input.items,
                      })) &&
                    (input.items.length <= 3 ||
                      $report(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<> & MaxItems<3>",
                        value: input.items,
                      })) &&
                    input.items
                      .map(
                        (elem: any, _index2: number) =>
                          ("string" === typeof elem &&
                            (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                              elem,
                            ) ||
                              $report(_exceptionable, {
                                path: _path + ".items[" + _index2 + "]",
                                expected: 'string & Format<"uuid">',
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".items[" + _index2 + "]",
                            expected: '(string & Format<"uuid">)',
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                      value: input.items,
                    }),
                  ((Array.isArray(input.minItems) ||
                    $report(_exceptionable, {
                      path: _path + ".minItems",
                      expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                      value: input.minItems,
                    })) &&
                    (3 <= input.minItems.length ||
                      $report(_exceptionable, {
                        path: _path + ".minItems",
                        expected: "Array<> & MinItems<3>",
                        value: input.minItems,
                      })) &&
                    input.minItems
                      .map(
                        (elem: any, _index3: number) =>
                          ("number" === typeof elem &&
                            (Number.isFinite(elem) ||
                              $report(_exceptionable, {
                                path: _path + ".minItems[" + _index3 + "]",
                                expected: "number",
                                value: elem,
                              })) &&
                            (3 <= elem ||
                              $report(_exceptionable, {
                                path: _path + ".minItems[" + _index3 + "]",
                                expected: "number & Minimum<3>",
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".minItems[" + _index3 + "]",
                            expected: "(number & Minimum<3>)",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".minItems",
                      expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                      value: input.minItems,
                    }),
                  ((Array.isArray(input.maxItems) ||
                    $report(_exceptionable, {
                      path: _path + ".maxItems",
                      expected:
                        "(Array<(string & MaxLength<7>) | (number & Maximum<7>)> & MaxItems<7>)",
                      value: input.maxItems,
                    })) &&
                    (input.maxItems.length <= 7 ||
                      $report(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: "Array<> & MaxItems<7>",
                        value: input.maxItems,
                      })) &&
                    input.maxItems
                      .map(
                        (elem: any, _index4: number) =>
                          ("string" === typeof elem &&
                            (elem.length <= 7 ||
                              $report(_exceptionable, {
                                path: _path + ".maxItems[" + _index4 + "]",
                                expected: "string & MaxLength<7>",
                                value: elem,
                              }))) ||
                          ("number" === typeof elem &&
                            (Number.isFinite(elem) ||
                              $report(_exceptionable, {
                                path: _path + ".maxItems[" + _index4 + "]",
                                expected: "number",
                                value: elem,
                              })) &&
                            (elem <= 7 ||
                              $report(_exceptionable, {
                                path: _path + ".maxItems[" + _index4 + "]",
                                expected: "number & Maximum<7>",
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".maxItems[" + _index4 + "]",
                            expected:
                              "((number & Maximum<7>) | (string & MaxLength<7>))",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".maxItems",
                      expected:
                        "(Array<(string & MaxLength<7>) | (number & Maximum<7>)> & MaxItems<7>)",
                      value: input.maxItems,
                    }),
                  ((Array.isArray(input.both) ||
                    $report(_exceptionable, {
                      path: _path + ".both",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                      value: input.both,
                    })) &&
                    (3 <= input.both.length ||
                      $report(_exceptionable, {
                        path: _path + ".both",
                        expected: "Array<> & MinItems<3>",
                        value: input.both,
                      })) &&
                    (input.both.length <= 7 ||
                      $report(_exceptionable, {
                        path: _path + ".both",
                        expected: "Array<> & MaxItems<7>",
                        value: input.both,
                      })) &&
                    input.both
                      .map(
                        (elem: any, _index5: number) =>
                          ("string" === typeof elem &&
                            (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                              elem,
                            ) ||
                              $report(_exceptionable, {
                                path: _path + ".both[" + _index5 + "]",
                                expected: 'string & Format<"uuid">',
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".both[" + _index5 + "]",
                            expected: '(string & Format<"uuid">)',
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".both",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                      value: input.both,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagArrayUnion",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "TypeTagArrayUnion.Type",
                            value: elem,
                          })) &&
                          $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "TypeTagArrayUnion.Type",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagArrayUnion",
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
