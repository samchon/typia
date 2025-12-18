import ts from "typescript";

import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";
import { MetadataConstantValue } from "../../../schemas/metadata/MetadataConstantValue";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { CommentFactory } from "../../CommentFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";

/**
 * Get the enum name from a type if it's an enum literal.
 * Returns undefined if the type is not from an enum.
 */
const getEnumName = (props: IMetadataIteratorProps): string | undefined => {
  const filter = (flag: ts.TypeFlags) => (props.type.getFlags() & flag) !== 0;
  if (!filter(ts.TypeFlags.EnumLiteral)) return undefined;

  // Try to get the parent enum type name from the symbol
  const symbol = props.type.symbol;
  if (symbol?.parent) {
    const parentName = symbol.parent.getName();
    if (parentName && parentName !== "__type") {
      return parentName;
    }
  }

  // Fallback: try to extract from the type string (e.g., "MyEnum.VALUE" -> "MyEnum")
  const typeString = props.checker.typeToString(props.type);
  const dotIndex = typeString.lastIndexOf(".");
  if (dotIndex > 0) {
    return typeString.substring(0, dotIndex);
  }

  return undefined;
};

export const iterate_metadata_constant = (
  props: IMetadataIteratorProps,
): boolean => {
  if (!props.options.constant) return false;

  const filter = (flag: ts.TypeFlags) => (props.type.getFlags() & flag) !== 0;
  const comment = () => {
    if (!filter(ts.TypeFlags.EnumLiteral)) return {};
    return {
      jsDocTags: props.type.symbol?.getJsDocTags(),
      description: props.type.symbol
        ? (CommentFactory.description(props.type.symbol) ?? null)
        : undefined,
    };
  };

  // Get enum name if this is an enum literal
  const enumName = getEnumName(props);

  if (props.type.isLiteral()) {
    const value: string | number | bigint =
      typeof props.type.value === "object"
        ? BigInt(
            `${props.type.value.negative ? "-" : ""}${props.type.value.base10Value}`,
          )
        : props.type.value;
    const constant: MetadataConstant = ArrayUtil.take(
      props.metadata.constants,
      (elem) => elem.type === typeof value && elem.enumName === enumName,
      () =>
        MetadataConstant.create({
          type: typeof value as "number",
          values: [],
          enumName,
        }),
    );
    ArrayUtil.add(
      constant.values,
      MetadataConstantValue.create({
        value,
        tags: [],
        ...comment(),
      }),
      (a, b) => a.value === b.value,
    );
    return true;
  } else if (filter(ts.TypeFlags.BooleanLiteral)) {
    comment();
    const value: boolean = props.checker.typeToString(props.type) === "true";
    const constant: MetadataConstant = ArrayUtil.take(
      props.metadata.constants,
      (elem) => elem.type === "boolean" && elem.enumName === enumName,
      () =>
        MetadataConstant.create({
          type: "boolean",
          values: [],
          enumName,
        }),
    );
    ArrayUtil.add(
      constant.values,
      MetadataConstantValue.create({
        value,
        tags: [],
        ...comment(),
      }),
      (a, b) => a.value === b.value,
    );
    return true;
  }
  return false;
};
