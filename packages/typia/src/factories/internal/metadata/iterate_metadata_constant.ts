import ts from "typescript";

import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";
import { MetadataConstantValue } from "../../../schemas/metadata/MetadataConstantValue";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { CommentFactory } from "../../CommentFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";

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
  if (props.type.isLiteral()) {
    const value: string | number | bigint =
      typeof props.type.value === "object"
        ? BigInt(
            `${props.type.value.negative ? "-" : ""}${props.type.value.base10Value}`,
          )
        : props.type.value;
    const constant: MetadataConstant = ArrayUtil.take(
      props.metadata.constants,
      (elem) => elem.type === typeof value,
      () =>
        MetadataConstant.create({
          type: typeof value as "number",
          values: [],
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
      (elem) => elem.type === "boolean",
      () =>
        MetadataConstant.create({
          type: "boolean",
          values: [],
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
