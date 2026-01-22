import ts from "typescript";

import { MetadataNative } from "../../../schemas/metadata/MetadataNative";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { TypeFactory } from "../../TypeFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";

export const iterate_metadata_native = (
  props: IMetadataIteratorProps,
): boolean => {
  const name: string = getNativeName(
    TypeFactory.getFullName({
      checker: props.checker,
      type: props.type,
      symbol: props.type.getSymbol(),
    }),
  );
  const simple: IClassInfo | undefined = SIMPLES.get(name);
  if (
    simple !== undefined &&
    validate({
      checker: props.checker,
      type: props.type,
      info: simple,
    })
  ) {
    ArrayUtil.take(
      props.metadata.natives,
      (native) => native.name === name,
      () =>
        MetadataNative.create({
          name,
          tags: [],
        }),
    );
    return true;
  }

  for (const generic of GENERICS)
    if (
      name.substring(0, generic.name.length) === generic.name &&
      validate({
        checker: props.checker,
        type: props.type,
        info: generic,
      })
    ) {
      ArrayUtil.take(
        props.metadata.natives,
        (native) => native.name === name,
        () =>
          MetadataNative.create({
            name: generic.name ?? name,
            tags: [],
          }),
      );
      return true;
    }
  return false;
};

const validate = (props: {
  checker: ts.TypeChecker;
  type: ts.Type;
  info: IClassInfo;
}) =>
  (props.info.methods ?? []).every((method) => {
    const returnType = TypeFactory.getReturnTypeOfClassMethod({
      checker: props.checker,
      class: props.type,
      function: method.name,
    });
    return (
      returnType !== null &&
      props.checker.typeToString(returnType).split("<")?.[0] === method.return
    );
  }) &&
  (props.info.properties ?? []).every((property) => {
    const prop = props.checker.getPropertyOfType(props.type, property.name);
    const propType = prop?.valueDeclaration
      ? props.checker.getTypeAtLocation(prop?.valueDeclaration)
      : undefined;
    return (
      propType !== undefined &&
      props.checker.typeToString(propType).split("<")?.[0] === property.type
    );
  });

const getBinaryProps = (className: string): IClassInfo => ({
  name: className,
  methods: [
    ...["indexOf", "lastIndexOf"].map((name) => ({
      name,
      return: "number",
    })),
    ...["some", "every"].map((name) => ({
      name,
      return: "boolean",
    })),
    ...["join", "toLocaleString"].map((name) => ({
      name,
      return: "string",
    })),
    ...["reverse", "slice", "subarray"].map((name) => ({
      name,
      return: className,
    })),
  ],
  properties: ["BYTES_PER_ELEMENT", "length", "byteLength", "byteOffset"].map(
    (name) => ({
      name,
      type: "number",
    }),
  ),
});

const getNativeName = (name: string): string => {
  name = name.split("<")?.[0] ?? "";
  if (name.startsWith('"') && name.slice(0).includes('".'))
    name = name.slice(name.indexOf('".', 1) + 2);
  return name;
};

const SIMPLES: Map<string, IClassInfo> = new Map([
  [
    "Date",
    {
      methods: ["getTime", "getFullYear", "getMonth", "getMinutes"].map(
        (name) => ({
          name,
          return: "number",
        }),
      ),
    },
  ],
  [
    "Boolean",
    {
      methods: [
        {
          name: "valueOf",
          return: "boolean",
        },
      ],
    },
  ],
  [
    "Number",
    {
      methods: [
        ...["toFixed", "toExponential", "toPrecision"].map((name) => ({
          name,
          return: "string",
        })),
        { name: "valueOf", return: "number" },
      ],
    },
  ],
  [
    "String",
    {
      methods: [
        "charAt",
        "concat",
        "valueOf",
        "trim",
        "replace",
        "substring",
      ].map((name) => ({ name, return: "string" })),
    },
  ],
  ...[
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigUint64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "BigInt64Array",
    "Float32Array",
    "Float64Array",
  ].map((name) => [name, getBinaryProps(name)] as const),
  ...["ArrayBuffer", "SharedArrayBuffer"].map((className) => {
    const info: IClassInfo = {
      methods: [{ name: "slice", return: className }],
      properties: [{ name: "byteLength", type: "number" }],
    };
    return [className, info] as const;
  }),
  ...["Blob", "File"].map(
    (className) =>
      [
        className,
        {
          methods: [
            { name: "arrayBuffer", return: "Promise" },
            { name: "slice", return: "Blob" },
            { name: "text", return: "Promise" },
          ],
          properties: [
            { name: "size", type: "number" },
            { name: "type", type: "string" },
          ],
        },
      ] satisfies [string, IClassInfo],
  ),
  [
    "DataView",
    {
      methods: [
        "getFloat32",
        "getFloat64",
        "getInt8",
        "getInt16",
        "getInt32",
        "getUint8",
        "getUint16",
        "getUint32",
      ].map((name) => ({
        name,
        return: "number",
      })),
    },
  ],
  [
    "RegExp",
    {
      methods: [
        {
          name: "test",
          return: "boolean",
        },
      ],
    },
  ],
]);
const GENERICS: Array<IClassInfo & { name: string }> = [
  "WeakMap",
  "WeakSet",
].map((name) => ({
  name,
  methods: ["has", "delete"].map((name) => ({
    name,
    return: "boolean",
  })),
}));

interface IClassInfo {
  name?: string;
  methods?: IMethod[];
  properties?: IProperty[];
}
interface IProperty {
  name: string;
  type: string;
}
interface IMethod {
  name: string;
  return: string;
}
