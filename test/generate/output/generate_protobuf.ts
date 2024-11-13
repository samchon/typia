import typia, { tags } from "typia";
import * as __typia_transform__ProtobufReader from "typia/lib/internal/_ProtobufReader.js";
import * as __typia_transform__ProtobufSizer from "typia/lib/internal/_ProtobufSizer.js";
import * as __typia_transform__ProtobufWriter from "typia/lib/internal/_ProtobufWriter.js";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

interface IFile {
  name: string & tags.MaxLength<8>;
  extension: null | (string & tags.MinLength<1> & tags.MaxLength<3>);
  size: number & tags.Type<"uint32">;
  data: Uint8Array;
}
export const createEncode = (() => {
  const encoder = <
    Writer extends
      import("typia/lib/internal/_IProtobufWriter.js")._IProtobufWriter,
  >(
    writer: Writer,
    input: any,
  ): Writer => {
    const _peo0 = (input: any): any => {
      // property "name": (string & MaxLength<8>);
      writer.uint32(10);
      writer.string(input.name);
      // property "extension": ((string & MinLength<1> & MaxLength<3>) | null);
      if (null !== input.extension) {
        writer.uint32(18);
        writer.string(input.extension);
      }
      // property "size": (number & Type<"uint32">);
      writer.uint32(24);
      writer.uint32(input.size);
      // property "data": Uint8Array;
      writer.uint32(34);
      writer.bytes(input.data);
    };
    _peo0(input);
    return writer;
  };
  return (input: IFile): Uint8Array => {
    const sizer = encoder(
      new __typia_transform__ProtobufSizer._ProtobufSizer(),
      input,
    );
    const writer = encoder(
      new __typia_transform__ProtobufWriter._ProtobufWriter(sizer),
      input,
    );
    return writer.buffer();
  };
})();
export const createAssertEncode = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.name &&
    input.name.length <= 8 &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        1 <= input.extension.length &&
        input.extension.length <= 3)) &&
    "number" === typeof input.size &&
    Math.floor(input.size) === input.size &&
    0 <= input.size &&
    input.size <= 4294967295 &&
    input.data instanceof Uint8Array;
  const _ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.name &&
      (input.name.length <= 8 ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.protobuf.createAssertEncode",
            path: _path + ".name",
            expected: "string & MaxLength<8>",
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertEncode",
          path: _path + ".name",
          expected: "(string & MaxLength<8>)",
          value: input.name,
        },
        _errorFactory,
      )) &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        (1 <= input.extension.length ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.protobuf.createAssertEncode",
              path: _path + ".extension",
              expected: "string & MinLength<1>",
              value: input.extension,
            },
            _errorFactory,
          )) &&
        (input.extension.length <= 3 ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.protobuf.createAssertEncode",
              path: _path + ".extension",
              expected: "string & MaxLength<3>",
              value: input.extension,
            },
            _errorFactory,
          ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertEncode",
          path: _path + ".extension",
          expected: "((string & MinLength<1> & MaxLength<3>) | null)",
          value: input.extension,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.size &&
      ((Math.floor(input.size) === input.size &&
        0 <= input.size &&
        input.size <= 4294967295) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.protobuf.createAssertEncode",
            path: _path + ".size",
            expected: 'number & Type<"uint32">',
            value: input.size,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertEncode",
          path: _path + ".size",
          expected: '(number & Type<"uint32">)',
          value: input.size,
        },
        _errorFactory,
      )) &&
    (input.data instanceof Uint8Array ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertEncode",
          path: _path + ".data",
          expected: "Uint8Array",
          value: input.data,
        },
        _errorFactory,
      ));
  const encoder = <
    Writer extends
      import("typia/lib/internal/_IProtobufWriter.js")._IProtobufWriter,
  >(
    writer: Writer,
    input: any,
  ): Writer => {
    const _peo0 = (input: any): any => {
      // property "name": (string & MaxLength<8>);
      writer.uint32(10);
      writer.string(input.name);
      // property "extension": ((string & MinLength<1> & MaxLength<3>) | null);
      if (null !== input.extension) {
        writer.uint32(18);
        writer.string(input.extension);
      }
      // property "size": (number & Type<"uint32">);
      writer.uint32(24);
      writer.uint32(input.size);
      // property "data": Uint8Array;
      writer.uint32(34);
      writer.bytes(input.data);
    };
    const _io0 = (input: any): boolean =>
      "string" === typeof input.name &&
      input.name.length <= 8 &&
      (null === input.extension ||
        ("string" === typeof input.extension &&
          1 <= input.extension.length &&
          input.extension.length <= 3)) &&
      "number" === typeof input.size &&
      Math.floor(input.size) === input.size &&
      0 <= input.size &&
      input.size <= 4294967295 &&
      input.data instanceof Uint8Array;
    _peo0(input);
    return writer;
  };
  const __is = (input: any): input is IFile =>
    "object" === typeof input && null !== input && _io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): IFile => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.protobuf.createAssertEncode",
              path: _path + "",
              expected: "IFile",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.protobuf.createAssertEncode",
            path: _path + "",
            expected: "IFile",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __encode = (input: IFile): Uint8Array => {
    const sizer = encoder(
      new __typia_transform__ProtobufSizer._ProtobufSizer(),
      input,
    );
    const writer = encoder(
      new __typia_transform__ProtobufWriter._ProtobufWriter(sizer),
      input,
    );
    return writer.buffer();
  };
  return (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): Uint8Array => __encode(__assert(input, errorFactory));
})();
export const createIsEncode = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.name &&
    input.name.length <= 8 &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        1 <= input.extension.length &&
        input.extension.length <= 3)) &&
    "number" === typeof input.size &&
    Math.floor(input.size) === input.size &&
    0 <= input.size &&
    input.size <= 4294967295 &&
    input.data instanceof Uint8Array;
  const encoder = <
    Writer extends
      import("typia/lib/internal/_IProtobufWriter.js")._IProtobufWriter,
  >(
    writer: Writer,
    input: any,
  ): Writer => {
    const _peo0 = (input: any): any => {
      // property "name": (string & MaxLength<8>);
      writer.uint32(10);
      writer.string(input.name);
      // property "extension": ((string & MinLength<1> & MaxLength<3>) | null);
      if (null !== input.extension) {
        writer.uint32(18);
        writer.string(input.extension);
      }
      // property "size": (number & Type<"uint32">);
      writer.uint32(24);
      writer.uint32(input.size);
      // property "data": Uint8Array;
      writer.uint32(34);
      writer.bytes(input.data);
    };
    const _io0 = (input: any): boolean =>
      "string" === typeof input.name &&
      input.name.length <= 8 &&
      (null === input.extension ||
        ("string" === typeof input.extension &&
          1 <= input.extension.length &&
          input.extension.length <= 3)) &&
      "number" === typeof input.size &&
      Math.floor(input.size) === input.size &&
      0 <= input.size &&
      input.size <= 4294967295 &&
      input.data instanceof Uint8Array;
    _peo0(input);
    return writer;
  };
  const __is = (input: any): input is IFile =>
    "object" === typeof input && null !== input && _io0(input);
  const __encode = (input: IFile): Uint8Array => {
    const sizer = encoder(
      new __typia_transform__ProtobufSizer._ProtobufSizer(),
      input,
    );
    const writer = encoder(
      new __typia_transform__ProtobufWriter._ProtobufWriter(sizer),
      input,
    );
    return writer.buffer();
  };
  return (input: any): Uint8Array | null =>
    __is(input) ? __encode(input) : null;
})();
export const createValidateEncode = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.name &&
    input.name.length <= 8 &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        1 <= input.extension.length &&
        input.extension.length <= 3)) &&
    "number" === typeof input.size &&
    Math.floor(input.size) === input.size &&
    0 <= input.size &&
    input.size <= 4294967295 &&
    input.data instanceof Uint8Array;
  const _vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.name &&
        (input.name.length <= 8 ||
          $report(_exceptionable, {
            path: _path + ".name",
            expected: "string & MaxLength<8>",
            value: input.name,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".name",
          expected: "(string & MaxLength<8>)",
          value: input.name,
        }),
      null === input.extension ||
        ("string" === typeof input.extension &&
          (1 <= input.extension.length ||
            $report(_exceptionable, {
              path: _path + ".extension",
              expected: "string & MinLength<1>",
              value: input.extension,
            })) &&
          (input.extension.length <= 3 ||
            $report(_exceptionable, {
              path: _path + ".extension",
              expected: "string & MaxLength<3>",
              value: input.extension,
            }))) ||
        $report(_exceptionable, {
          path: _path + ".extension",
          expected: "((string & MinLength<1> & MaxLength<3>) | null)",
          value: input.extension,
        }),
      ("number" === typeof input.size &&
        ((Math.floor(input.size) === input.size &&
          0 <= input.size &&
          input.size <= 4294967295) ||
          $report(_exceptionable, {
            path: _path + ".size",
            expected: 'number & Type<"uint32">',
            value: input.size,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".size",
          expected: '(number & Type<"uint32">)',
          value: input.size,
        }),
      input.data instanceof Uint8Array ||
        $report(_exceptionable, {
          path: _path + ".data",
          expected: "Uint8Array",
          value: input.data,
        }),
    ].every((flag: boolean) => flag);
  const encoder = <
    Writer extends
      import("typia/lib/internal/_IProtobufWriter.js")._IProtobufWriter,
  >(
    writer: Writer,
    input: any,
  ): Writer => {
    const _peo0 = (input: any): any => {
      // property "name": (string & MaxLength<8>);
      writer.uint32(10);
      writer.string(input.name);
      // property "extension": ((string & MinLength<1> & MaxLength<3>) | null);
      if (null !== input.extension) {
        writer.uint32(18);
        writer.string(input.extension);
      }
      // property "size": (number & Type<"uint32">);
      writer.uint32(24);
      writer.uint32(input.size);
      // property "data": Uint8Array;
      writer.uint32(34);
      writer.bytes(input.data);
    };
    const _io0 = (input: any): boolean =>
      "string" === typeof input.name &&
      input.name.length <= 8 &&
      (null === input.extension ||
        ("string" === typeof input.extension &&
          1 <= input.extension.length &&
          input.extension.length <= 3)) &&
      "number" === typeof input.size &&
      Math.floor(input.size) === input.size &&
      0 <= input.size &&
      input.size <= 4294967295 &&
      input.data instanceof Uint8Array;
    _peo0(input);
    return writer;
  };
  const __is = (input: any): input is IFile =>
    "object" === typeof input && null !== input && _io0(input);
  let errors: any;
  let $report: any;
  const __validate = (input: any): import("typia").IValidation<IFile> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__typia_transform__validateReport._validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "IFile",
            value: input,
          })) &&
          _vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "IFile",
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
  const __encode = (input: IFile): Uint8Array => {
    const sizer = encoder(
      new __typia_transform__ProtobufSizer._ProtobufSizer(),
      input,
    );
    const writer = encoder(
      new __typia_transform__ProtobufWriter._ProtobufWriter(sizer),
      input,
    );
    return writer.buffer();
  };
  return (input: any): import("typia").IValidation<Uint8Array> => {
    const result = __validate(input) as any;
    if (result.success) result.data = __encode(input);
    return result;
  };
})();
export const createDecode = (() => {
  const _pdo0 = (reader: any, length: number = -1): any => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      name: "" as any,
      extension: null as any,
      size: undefined as any,
      data: new Uint8Array([]) as any,
    } as any;
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          // string;
          output.name = reader.string();
          break;
        case 2:
          // string;
          output.extension = reader.string();
          break;
        case 3:
          // uint32;
          output.size = reader.uint32();
          break;
        case 4:
          // bytes;
          output.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  return (input: Uint8Array): import("typia").Resolved<IFile> => {
    const reader = new __typia_transform__ProtobufReader._ProtobufReader(input);
    return _pdo0(reader);
  };
})();
export const createAssertDecode = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.name &&
    input.name.length <= 8 &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        1 <= input.extension.length &&
        input.extension.length <= 3)) &&
    "number" === typeof input.size &&
    Math.floor(input.size) === input.size &&
    0 <= input.size &&
    input.size <= 4294967295 &&
    input.data instanceof Uint8Array;
  const _ao0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    (("string" === typeof input.name &&
      (input.name.length <= 8 ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.protobuf.createAssertDecode",
            path: _path + ".name",
            expected: "string & MaxLength<8>",
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertDecode",
          path: _path + ".name",
          expected: "(string & MaxLength<8>)",
          value: input.name,
        },
        _errorFactory,
      )) &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        (1 <= input.extension.length ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.protobuf.createAssertDecode",
              path: _path + ".extension",
              expected: "string & MinLength<1>",
              value: input.extension,
            },
            _errorFactory,
          )) &&
        (input.extension.length <= 3 ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.protobuf.createAssertDecode",
              path: _path + ".extension",
              expected: "string & MaxLength<3>",
              value: input.extension,
            },
            _errorFactory,
          ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertDecode",
          path: _path + ".extension",
          expected: "((string & MinLength<1> & MaxLength<3>) | null)",
          value: input.extension,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.size &&
      ((Math.floor(input.size) === input.size &&
        0 <= input.size &&
        input.size <= 4294967295) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.protobuf.createAssertDecode",
            path: _path + ".size",
            expected: 'number & Type<"uint32">',
            value: input.size,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertDecode",
          path: _path + ".size",
          expected: '(number & Type<"uint32">)',
          value: input.size,
        },
        _errorFactory,
      )) &&
    (input.data instanceof Uint8Array ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.protobuf.createAssertDecode",
          path: _path + ".data",
          expected: "Uint8Array",
          value: input.data,
        },
        _errorFactory,
      ));
  const _pdo0 = (reader: any, length: number = -1): any => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      name: "" as any,
      extension: null as any,
      size: undefined as any,
      data: new Uint8Array([]) as any,
    } as any;
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          // string;
          output.name = reader.string();
          break;
        case 2:
          // string;
          output.extension = reader.string();
          break;
        case 3:
          // uint32;
          output.size = reader.uint32();
          break;
        case 4:
          // bytes;
          output.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  const __is = (input: any): input is IFile =>
    "object" === typeof input && null !== input && _io0(input);
  let _errorFactory: any;
  const __assert = (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): IFile => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.protobuf.createAssertDecode",
              path: _path + "",
              expected: "IFile",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.protobuf.createAssertDecode",
            path: _path + "",
            expected: "IFile",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __decode = (input: Uint8Array): import("typia").Resolved<IFile> => {
    const reader = new __typia_transform__ProtobufReader._ProtobufReader(input);
    return _pdo0(reader);
  };
  return (
    input: Uint8Array,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Resolved<IFile> => __assert(__decode(input), errorFactory);
})();
export const createIsDecode = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.name &&
    input.name.length <= 8 &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        1 <= input.extension.length &&
        input.extension.length <= 3)) &&
    "number" === typeof input.size &&
    Math.floor(input.size) === input.size &&
    0 <= input.size &&
    input.size <= 4294967295 &&
    input.data instanceof Uint8Array;
  const _pdo0 = (reader: any, length: number = -1): any => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      name: "" as any,
      extension: null as any,
      size: undefined as any,
      data: new Uint8Array([]) as any,
    } as any;
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          // string;
          output.name = reader.string();
          break;
        case 2:
          // string;
          output.extension = reader.string();
          break;
        case 3:
          // uint32;
          output.size = reader.uint32();
          break;
        case 4:
          // bytes;
          output.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  const __is = (input: any): input is IFile =>
    "object" === typeof input && null !== input && _io0(input);
  const __decode = (input: Uint8Array): import("typia").Resolved<IFile> => {
    const reader = new __typia_transform__ProtobufReader._ProtobufReader(input);
    return _pdo0(reader);
  };
  return (input: Uint8Array): import("typia").Resolved<IFile> | null => {
    const value = __decode(input);
    if (!__is(value)) return null;
    return value;
  };
})();
export const createValidateDecode = (() => {
  const _io0 = (input: any): boolean =>
    "string" === typeof input.name &&
    input.name.length <= 8 &&
    (null === input.extension ||
      ("string" === typeof input.extension &&
        1 <= input.extension.length &&
        input.extension.length <= 3)) &&
    "number" === typeof input.size &&
    Math.floor(input.size) === input.size &&
    0 <= input.size &&
    input.size <= 4294967295 &&
    input.data instanceof Uint8Array;
  const _vo0 = (
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.name &&
        (input.name.length <= 8 ||
          $report(_exceptionable, {
            path: _path + ".name",
            expected: "string & MaxLength<8>",
            value: input.name,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".name",
          expected: "(string & MaxLength<8>)",
          value: input.name,
        }),
      null === input.extension ||
        ("string" === typeof input.extension &&
          (1 <= input.extension.length ||
            $report(_exceptionable, {
              path: _path + ".extension",
              expected: "string & MinLength<1>",
              value: input.extension,
            })) &&
          (input.extension.length <= 3 ||
            $report(_exceptionable, {
              path: _path + ".extension",
              expected: "string & MaxLength<3>",
              value: input.extension,
            }))) ||
        $report(_exceptionable, {
          path: _path + ".extension",
          expected: "((string & MinLength<1> & MaxLength<3>) | null)",
          value: input.extension,
        }),
      ("number" === typeof input.size &&
        ((Math.floor(input.size) === input.size &&
          0 <= input.size &&
          input.size <= 4294967295) ||
          $report(_exceptionable, {
            path: _path + ".size",
            expected: 'number & Type<"uint32">',
            value: input.size,
          }))) ||
        $report(_exceptionable, {
          path: _path + ".size",
          expected: '(number & Type<"uint32">)',
          value: input.size,
        }),
      input.data instanceof Uint8Array ||
        $report(_exceptionable, {
          path: _path + ".data",
          expected: "Uint8Array",
          value: input.data,
        }),
    ].every((flag: boolean) => flag);
  const _pdo0 = (reader: any, length: number = -1): any => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      name: "" as any,
      extension: null as any,
      size: undefined as any,
      data: new Uint8Array([]) as any,
    } as any;
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          // string;
          output.name = reader.string();
          break;
        case 2:
          // string;
          output.extension = reader.string();
          break;
        case 3:
          // uint32;
          output.size = reader.uint32();
          break;
        case 4:
          // bytes;
          output.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  const __is = (input: any): input is IFile =>
    "object" === typeof input && null !== input && _io0(input);
  let errors: any;
  let $report: any;
  const __validate = (input: any): import("typia").IValidation<IFile> => {
    if (false === __is(input)) {
      errors = [];
      $report = (__typia_transform__validateReport._validateReport as any)(
        errors,
      );
      ((input: any, _path: string, _exceptionable: boolean = true) =>
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "IFile",
            value: input,
          })) &&
          _vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "IFile",
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
  const __decode = (input: Uint8Array): import("typia").Resolved<IFile> => {
    const reader = new __typia_transform__ProtobufReader._ProtobufReader(input);
    return _pdo0(reader);
  };
  return (
    input: Uint8Array,
  ): import("typia").IValidation<import("typia").Resolved<IFile>> =>
    __validate(__decode(input));
})();
