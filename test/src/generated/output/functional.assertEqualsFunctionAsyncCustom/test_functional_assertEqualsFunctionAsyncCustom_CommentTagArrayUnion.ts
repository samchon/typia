import typia from "typia";
import { _test_functional_assertEqualsFunctionAsync } from "../../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagArrayUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "CommentTagArrayUnion",
  )(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
      async (input: CommentTagArrayUnion): Promise<CommentTagArrayUnion> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): CommentTagArrayUnion => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is CommentTagArrayUnion => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.items) &&
              3 <= input.items.length &&
              input.items.length <= 3 &&
              input.items.every(
                (elem: any, _index2: number) => "string" === typeof elem,
              ) &&
              Array.isArray(input.minItems) &&
              3 <= input.minItems.length &&
              input.minItems.every(
                (elem: any, _index3: number) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input.maxItems) &&
              input.maxItems.length <= 7 &&
              input.maxItems.every(
                (elem: any, _index4: number) =>
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)),
              ) &&
              Array.isArray(input.both) &&
              3 <= input.both.length &&
              input.both.length <= 7 &&
              input.both.every(
                (elem: any, _index5: number) => "string" === typeof elem,
              ) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["items", "minItems", "maxItems", "both"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $io0(elem, true),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagArrayUnion => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.items) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
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
                      "string" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".items[" + _index2 + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.minItems) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minItems",
                      expected: "(Array<number> & MinItems<3>)",
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
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".minItems[" + _index3 + "]",
                          expected: "number",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minItems",
                      expected: "(Array<number> & MinItems<3>)",
                      value: input.minItems,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.maxItems) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maxItems",
                      expected: "(Array<string | number> & MaxItems<7>)",
                      value: input.maxItems,
                    },
                    errorFactory,
                  )) &&
                  (input.maxItems.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maxItems",
                        expected: "Array<> & MaxItems<7>",
                        value: input.maxItems,
                      },
                      errorFactory,
                    )) &&
                  input.maxItems.every(
                    (elem: any, _index4: number) =>
                      "string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".maxItems[" + _index4 + "]",
                          expected: "(number | string)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maxItems",
                      expected: "(Array<string | number> & MaxItems<7>)",
                      value: input.maxItems,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.both) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
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
                    (elem: any, _index5: number) =>
                      "string" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".both[" + _index5 + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
                      value: input.both,
                    },
                    errorFactory,
                  )) &&
                (4 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["items", "minItems", "maxItems", "both"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "CommentTagArrayUnion",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected: "CommentTagArrayUnion.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "CommentTagArrayUnion.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "CommentTagArrayUnion",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): CommentTagArrayUnion => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is CommentTagArrayUnion => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.items) &&
              3 <= input.items.length &&
              input.items.length <= 3 &&
              input.items.every(
                (elem: any, _index2: number) => "string" === typeof elem,
              ) &&
              Array.isArray(input.minItems) &&
              3 <= input.minItems.length &&
              input.minItems.every(
                (elem: any, _index3: number) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input.maxItems) &&
              input.maxItems.length <= 7 &&
              input.maxItems.every(
                (elem: any, _index4: number) =>
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)),
              ) &&
              Array.isArray(input.both) &&
              3 <= input.both.length &&
              input.both.length <= 7 &&
              input.both.every(
                (elem: any, _index5: number) => "string" === typeof elem,
              ) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["items", "minItems", "maxItems", "both"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $io0(elem, true),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagArrayUnion => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.items) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
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
                      "string" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".items[" + _index2 + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items",
                      expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
                      value: input.items,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.minItems) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minItems",
                      expected: "(Array<number> & MinItems<3>)",
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
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".minItems[" + _index3 + "]",
                          expected: "number",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minItems",
                      expected: "(Array<number> & MinItems<3>)",
                      value: input.minItems,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.maxItems) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maxItems",
                      expected: "(Array<string | number> & MaxItems<7>)",
                      value: input.maxItems,
                    },
                    errorFactory,
                  )) &&
                  (input.maxItems.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maxItems",
                        expected: "Array<> & MaxItems<7>",
                        value: input.maxItems,
                      },
                      errorFactory,
                    )) &&
                  input.maxItems.every(
                    (elem: any, _index4: number) =>
                      "string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".maxItems[" + _index4 + "]",
                          expected: "(number | string)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maxItems",
                      expected: "(Array<string | number> & MaxItems<7>)",
                      value: input.maxItems,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.both) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
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
                    (elem: any, _index5: number) =>
                      "string" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".both[" + _index5 + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".both",
                      expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
                      value: input.both,
                    },
                    errorFactory,
                  )) &&
                (4 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["items", "minItems", "maxItems", "both"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "CommentTagArrayUnion",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected: "CommentTagArrayUnion.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "CommentTagArrayUnion.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "CommentTagArrayUnion",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
