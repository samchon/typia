import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataSet } from "../../../schemas/metadata/MetadataSet";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { TypeFactory } from "../../TypeFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_set = (
  props: IMetadataIteratorProps,
): boolean => {
  const type: ts.Type = props.checker.getApparentType(props.type);

  const name = TypeFactory.getFullName({
    checker: props.checker,
    type: type,
    symbol: type.getSymbol(),
  });
  const generic = type.aliasSymbol
    ? type.aliasTypeArguments
    : props.checker.getTypeArguments(type as ts.TypeReference);
  if (name.substring(0, 4) !== "Set<" || generic?.length !== 1) return false;

  const key: ts.Type = generic[0]!;
  const value: Metadata = explore_metadata({
    ...props,
    type: key,
    explore: {
      ...props.explore,
      escaped: false,
      aliased: false,
    },
    intersected: false,
  });
  ArrayUtil.take(
    props.metadata.sets,
    (elem) => elem.value.getName() === value.getName(),
    () =>
      MetadataSet.create({
        value: explore_metadata({
          ...props,
          type: key,
          explore: {
            ...props.explore,
            escaped: false,
            aliased: false,
          },
          intersected: false,
        }),
        tags: [],
      }),
  );
  return true;
};
