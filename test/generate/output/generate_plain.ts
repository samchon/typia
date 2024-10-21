import typia, { tags } from "typia";
import * as __typia_transform_$accessExpressionAsString from "typia/lib/internal/$accessExpressionAsString.js";
import * as __typia_transform_$assertGuard from "typia/lib/internal/$assertGuard.js";
import * as __typia_transform_$randomArray from "typia/lib/internal/$randomArray.js";
import * as __typia_transform_$randomFormatDatetime from "typia/lib/internal/$randomFormatDatetime.js";
import * as __typia_transform_$randomFormatEmail from "typia/lib/internal/$randomFormatEmail.js";
import * as __typia_transform_$randomFormatUuid from "typia/lib/internal/$randomFormatUuid.js";
import * as __typia_transform_$randomInteger from "typia/lib/internal/$randomInteger.js";
import * as __typia_transform_$randomPattern from "typia/lib/internal/$randomPattern.js";
import * as __typia_transform_$randomPick from "typia/lib/internal/$randomPick.js";
import * as __typia_transform_$randomString from "typia/lib/internal/$randomString.js";
import * as __typia_transform_$validateReport from "typia/lib/internal/$validateReport.js";

interface ICitizen {
  id: string & tags.Format<"uuid">;
  name: string & tags.Pattern<"^[A-Z][a-z]+$">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.ExclusiveMaximum<100>;
  motto: string;
  birthdate: Date;
  died_at: null | Date;
  parent: ICitizen | null;
  children: ICitizen[];
}
export const createIs = (() => {
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  return (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
})();
export const createEquals = (() => {
  const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent, true && _exceptionable))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any, _index1: number) =>
        "object" === typeof elem &&
        null !== elem &&
        $io0(elem, true && _exceptionable),
    ) &&
    (9 === Object.keys(input).length ||
      Object.keys(input).every((key: any) => {
        if (
          [
            "id",
            "name",
            "email",
            "age",
            "motto",
            "birthdate",
            "died_at",
            "parent",
            "children",
          ].some((prop: any) => key === prop)
        )
          return true;
        const value = input[key];
        if (undefined === value) return true;
        return false;
      }));
  return (input: any, _exceptionable: boolean = true): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input, true);
})();
export const createAssert = (() => {
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        input.email,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      ((Math.floor(input.age) === input.age &&
        0 <= input.age &&
        input.age <= 4294967295) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        $ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __typia_transform_$assertGuard.$assertGuard(
              _exceptionable,
              {
                method: "typia.createAssert",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            $ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __typia_transform_$assertGuard.$assertGuard(
            _exceptionable,
            {
              method: "typia.createAssert",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let _errorFactory: any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform_$assertGuard.$assertGuard(
            true,
            {
              method: "typia.createAssert",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          $ao0(input, _path + "", true)) ||
        __typia_transform_$assertGuard.$assertGuard(
          true,
          {
            method: "typia.createAssert",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
})();
export const createAssertEquals = (() => {
  const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent, true && _exceptionable))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any, _index1: number) =>
        "object" === typeof elem &&
        null !== elem &&
        $io0(elem, true && _exceptionable),
    ) &&
    (9 === Object.keys(input).length ||
      Object.keys(input).every((key: any) => {
        if (
          [
            "id",
            "name",
            "email",
            "age",
            "motto",
            "birthdate",
            "died_at",
            "parent",
            "children",
          ].some((prop: any) => key === prop)
        )
          return true;
        const value = input[key];
        if (undefined === value) return true;
        return false;
      }));
  const $ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertEquals",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertEquals",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        input.email,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertEquals",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      ((Math.floor(input.age) === input.age &&
        0 <= input.age &&
        input.age <= 4294967295) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertEquals",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertEquals",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertEquals",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        $ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __typia_transform_$assertGuard.$assertGuard(
              _exceptionable,
              {
                method: "typia.createAssertEquals",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            $ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __typia_transform_$assertGuard.$assertGuard(
            _exceptionable,
            {
              method: "typia.createAssertEquals",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertEquals",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
    (9 === Object.keys(input).length ||
      false === _exceptionable ||
      Object.keys(input).every((key: any) => {
        if (
          [
            "id",
            "name",
            "email",
            "age",
            "motto",
            "birthdate",
            "died_at",
            "parent",
            "children",
          ].some((prop: any) => key === prop)
        )
          return true;
        const value = input[key];
        if (undefined === value) return true;
        return __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertEquals",
            path:
              _path +
              __typia_transform_$accessExpressionAsString.$accessExpressionAsString(
                key,
              ),
            expected: "undefined",
            value: value,
          },
          _errorFactory,
        );
      }));
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input, true);
  let _errorFactory: any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform_$assertGuard.$assertGuard(
            true,
            {
              method: "typia.createAssertEquals",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          $ao0(input, _path + "", true)) ||
        __typia_transform_$assertGuard.$assertGuard(
          true,
          {
            method: "typia.createAssertEquals",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
})();
export const createAssertGuard = (() => {
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuard",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuard",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        input.email,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuard",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      ((Math.floor(input.age) === input.age &&
        0 <= input.age &&
        input.age <= 4294967295) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuard",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuard",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuard",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        $ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __typia_transform_$assertGuard.$assertGuard(
              _exceptionable,
              {
                method: "typia.createAssertGuard",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            $ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __typia_transform_$assertGuard.$assertGuard(
            _exceptionable,
            {
              method: "typia.createAssertGuard",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuard",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      ));
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let _errorFactory: any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform_$assertGuard.$assertGuard(
            true,
            {
              method: "typia.createAssertGuard",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          $ao0(input, _path + "", true)) ||
        __typia_transform_$assertGuard.$assertGuard(
          true,
          {
            method: "typia.createAssertGuard",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
  };
})();
export const createAssertGuardEquals = (() => {
  const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent, true && _exceptionable))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any, _index1: number) =>
        "object" === typeof elem &&
        null !== elem &&
        $io0(elem, true && _exceptionable),
    ) &&
    (9 === Object.keys(input).length ||
      Object.keys(input).every((key: any) => {
        if (
          [
            "id",
            "name",
            "email",
            "age",
            "motto",
            "birthdate",
            "died_at",
            "parent",
            "children",
          ].some((prop: any) => key === prop)
        )
          return true;
        const value = input[key];
        if (undefined === value) return true;
        return false;
      }));
  const $ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuardEquals",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (RegExp("^[A-Z][a-z]+$").test(input.name) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuardEquals",
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        input.email,
      ) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuardEquals",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      ((Math.floor(input.age) === input.age &&
        0 <= input.age &&
        input.age <= 4294967295) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuardEquals",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age < 100 ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuardEquals",
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    ("string" === typeof input.motto ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        },
        _errorFactory,
      )) &&
    (input.birthdate instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        },
        _errorFactory,
      )) &&
    (null === input.died_at ||
      input.died_at instanceof Date ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        },
        _errorFactory,
      )) &&
    (null === input.parent ||
      ((("object" === typeof input.parent && null !== input.parent) ||
        __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuardEquals",
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          },
          _errorFactory,
        )) &&
        $ao0(input.parent, _path + ".parent", true && _exceptionable)) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.children) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
      input.children.every(
        (elem: any, _index2: number) =>
          ((("object" === typeof elem && null !== elem) ||
            __typia_transform_$assertGuard.$assertGuard(
              _exceptionable,
              {
                method: "typia.createAssertGuardEquals",
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              },
              _errorFactory,
            )) &&
            $ao0(
              elem,
              _path + ".children[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __typia_transform_$assertGuard.$assertGuard(
            _exceptionable,
            {
              method: "typia.createAssertGuardEquals",
              path: _path + ".children[" + _index2 + "]",
              expected: "ICitizen",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform_$assertGuard.$assertGuard(
        _exceptionable,
        {
          method: "typia.createAssertGuardEquals",
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        },
        _errorFactory,
      )) &&
    (9 === Object.keys(input).length ||
      false === _exceptionable ||
      Object.keys(input).every((key: any) => {
        if (
          [
            "id",
            "name",
            "email",
            "age",
            "motto",
            "birthdate",
            "died_at",
            "parent",
            "children",
          ].some((prop: any) => key === prop)
        )
          return true;
        const value = input[key];
        if (undefined === value) return true;
        return __typia_transform_$assertGuard.$assertGuard(
          _exceptionable,
          {
            method: "typia.createAssertGuardEquals",
            path:
              _path +
              __typia_transform_$accessExpressionAsString.$accessExpressionAsString(
                key,
              ),
            expected: "undefined",
            value: value,
          },
          _errorFactory,
        );
      }));
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input, true);
  let _errorFactory: any;
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ICitizen => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform_$assertGuard.$assertGuard(
            true,
            {
              method: "typia.createAssertGuardEquals",
              path: _path + "",
              expected: "ICitizen",
              value: input,
            },
            _errorFactory,
          )) &&
          $ao0(input, _path + "", true)) ||
        __typia_transform_$assertGuard.$assertGuard(
          true,
          {
            method: "typia.createAssertGuardEquals",
            path: _path + "",
            expected: "ICitizen",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
  };
})();
export const createValidate = (() => {
  const $io0 = (input: any): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
    );
  const $vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
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
          expected: '(string & Format<"uuid">)',
          value: input.id,
        }),
      ("string" === typeof input.name &&
        (RegExp("^[A-Z][a-z]+$").test(input.name) ||
          $report(_exceptionable, {
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        }),
      ("string" === typeof input.email &&
        (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          input.email,
        ) ||
          $report(_exceptionable, {
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        }),
      ("number" === typeof input.age &&
        ((Math.floor(input.age) === input.age &&
          0 <= input.age &&
          input.age <= 4294967295) ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          })) &&
        (input.age < 100 ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        }),
      "string" === typeof input.motto ||
        $report(_exceptionable, {
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        }),
      input.birthdate instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        }),
      null === input.died_at ||
        input.died_at instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        }),
      null === input.parent ||
        ((("object" === typeof input.parent && null !== input.parent) ||
          $report(_exceptionable, {
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          })) &&
          $vo0(input.parent, _path + ".parent", true && _exceptionable)) ||
        $report(_exceptionable, {
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        }),
      ((Array.isArray(input.children) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        })) &&
        input.children
          .map(
            (elem: any, _index2: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $report(_exceptionable, {
                  path: _path + ".children[" + _index2 + "]",
                  expected: "ICitizen",
                  value: elem,
                })) &&
                $vo0(
                  elem,
                  _path + ".children[" + _index2 + "]",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              }),
          )
          .every((flag: boolean) => flag)) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        }),
    ].every((flag: boolean) => flag);
  const __is = (input: any): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input);
  let errors: any;
  let $report: any;
  return (input: any): import("typia").IValidation<ICitizen> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__typia_transform_$validateReport.$validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ICitizen",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "ICitizen",
          value: input,
        }))(input, "$input", true);
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    }
    return {
      success: true,
      errors: [],
      data: input,
    } as any;
  };
})();
export const createValidateEquals = (() => {
  const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    RegExp("^[A-Z][a-z]+$").test(input.name) &&
    "string" === typeof input.email &&
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      input.email,
    ) &&
    "number" === typeof input.age &&
    Math.floor(input.age) === input.age &&
    0 <= input.age &&
    input.age <= 4294967295 &&
    input.age < 100 &&
    "string" === typeof input.motto &&
    input.birthdate instanceof Date &&
    (null === input.died_at || input.died_at instanceof Date) &&
    (null === input.parent ||
      ("object" === typeof input.parent &&
        null !== input.parent &&
        $io0(input.parent, true && _exceptionable))) &&
    Array.isArray(input.children) &&
    input.children.every(
      (elem: any, _index1: number) =>
        "object" === typeof elem &&
        null !== elem &&
        $io0(elem, true && _exceptionable),
    ) &&
    (9 === Object.keys(input).length ||
      Object.keys(input).every((key: any) => {
        if (
          [
            "id",
            "name",
            "email",
            "age",
            "motto",
            "birthdate",
            "died_at",
            "parent",
            "children",
          ].some((prop: any) => key === prop)
        )
          return true;
        const value = input[key];
        if (undefined === value) return true;
        return false;
      }));
  const $vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
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
          expected: '(string & Format<"uuid">)',
          value: input.id,
        }),
      ("string" === typeof input.name &&
        (RegExp("^[A-Z][a-z]+$").test(input.name) ||
          $report(_exceptionable, {
            path: _path + ".name",
            expected: 'string & Pattern<"^[A-Z][a-z]+$">',
            value: input.name,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".name",
          expected: '(string & Pattern<"^[A-Z][a-z]+$">)',
          value: input.name,
        }),
      ("string" === typeof input.email &&
        (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          input.email,
        ) ||
          $report(_exceptionable, {
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        }),
      ("number" === typeof input.age &&
        ((Math.floor(input.age) === input.age &&
          0 <= input.age &&
          input.age <= 4294967295) ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          })) &&
        (input.age < 100 ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".age",
          expected: '(number & Type<"uint32"> & ExclusiveMaximum<100>)',
          value: input.age,
        }),
      "string" === typeof input.motto ||
        $report(_exceptionable, {
          path: _path + ".motto",
          expected: "string",
          value: input.motto,
        }),
      input.birthdate instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".birthdate",
          expected: "Date",
          value: input.birthdate,
        }),
      null === input.died_at ||
        input.died_at instanceof Date ||
        $report(_exceptionable, {
          path: _path + ".died_at",
          expected: "(Date | null)",
          value: input.died_at,
        }),
      null === input.parent ||
        ((("object" === typeof input.parent && null !== input.parent) ||
          $report(_exceptionable, {
            path: _path + ".parent",
            expected: "(ICitizen | null)",
            value: input.parent,
          })) &&
          $vo0(input.parent, _path + ".parent", true && _exceptionable)) ||
        $report(_exceptionable, {
          path: _path + ".parent",
          expected: "(ICitizen | null)",
          value: input.parent,
        }),
      ((Array.isArray(input.children) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        })) &&
        input.children
          .map(
            (elem: any, _index2: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $report(_exceptionable, {
                  path: _path + ".children[" + _index2 + "]",
                  expected: "ICitizen",
                  value: elem,
                })) &&
                $vo0(
                  elem,
                  _path + ".children[" + _index2 + "]",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".children[" + _index2 + "]",
                expected: "ICitizen",
                value: elem,
              }),
          )
          .every((flag: boolean) => flag)) ||
        $report(_exceptionable, {
          path: _path + ".children",
          expected: "Array<ICitizen>",
          value: input.children,
        }),
      9 === Object.keys(input).length ||
        false === _exceptionable ||
        Object.keys(input)
          .map((key: any) => {
            if (
              [
                "id",
                "name",
                "email",
                "age",
                "motto",
                "birthdate",
                "died_at",
                "parent",
                "children",
              ].some((prop: any) => key === prop)
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return $report(_exceptionable, {
              path:
                _path +
                __typia_transform_$accessExpressionAsString.$accessExpressionAsString(
                  key,
                ),
              expected: "undefined",
              value: value,
            });
          })
          .every((flag: boolean) => flag),
    ].every((flag: boolean) => flag);
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is ICitizen =>
    "object" === typeof input && null !== input && $io0(input, true);
  let errors: any;
  let $report: any;
  return (input: any): import("typia").IValidation<ICitizen> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__typia_transform_$validateReport.$validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "ICitizen",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "ICitizen",
          value: input,
        }))(input, "$input", true);
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    }
    return {
      success: true,
      errors: [],
      data: input,
    } as any;
  };
})();
export const createRandom = (() => {
  const $ro0 = (_recursive: boolean = true, _depth: number = 0): any => ({
    id: (
      _generator?.uuid ?? __typia_transform_$randomFormatUuid.$randomFormatUuid
    )(),
    name: (
      _generator?.pattern ?? __typia_transform_$randomPattern.$randomPattern
    )(new RegExp("^[A-Z][a-z]+$")),
    email: (
      _generator?.email ??
      __typia_transform_$randomFormatEmail.$randomFormatEmail
    )(),
    age: (
      _generator?.integer ?? __typia_transform_$randomInteger.$randomInteger
    )({
      type: "integer",
      exclusiveMaximum: true,
      maximum: 100,
    }),
    motto: (
      _generator?.string ?? __typia_transform_$randomString.$randomString
    )({
      type: "string",
    }),
    birthdate: new Date(
      (
        _generator?.datetime ??
        __typia_transform_$randomFormatDatetime.$randomFormatDatetime
      )(),
    ),
    died_at: __typia_transform_$randomPick.$randomPick([
      () => null,
      () =>
        new Date(
          (
            _generator?.datetime ??
            __typia_transform_$randomFormatDatetime.$randomFormatDatetime
          )(),
        ),
    ])(),
    parent: __typia_transform_$randomPick.$randomPick([
      () => null,
      () => $ro0(true, _recursive ? 1 + _depth : _depth),
    ])(),
    children:
      5 >= _depth
        ? (_generator?.array ?? __typia_transform_$randomArray.$randomArray)({
            type: "array",
            element: () => $ro0(true, _recursive ? 1 + _depth : _depth),
          })
        : [],
  });
  let _generator: Partial<import("typia").IRandomGenerator> | undefined;
  return (
    generator?: Partial<import("typia").IRandomGenerator>,
  ): import("typia").Resolved<ICitizen> => {
    _generator = generator;
    return $ro0();
  };
})();
