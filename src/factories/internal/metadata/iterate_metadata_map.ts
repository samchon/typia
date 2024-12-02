import ts from "typescript";

import { MetadataMap } from "../../../schemas/metadata/MetadataMap";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { TypeFactory } from "../../TypeFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_map = (
  props: IMetadataIteratorProps,
): boolean => {
  const type: ts.Type = props.checker.getApparentType(props.type);

  const name: string = TypeFactory.getFullName({
    checker: props.checker,
    type,
    symbol: type.getSymbol(),
  });
  const generic: readonly ts.Type[] | undefined = type.aliasSymbol
    ? type.aliasTypeArguments
    : props.checker.getTypeArguments(type as ts.TypeReference);
  if (name.substring(0, 4) !== "Map<" || generic?.length !== 2) return false;

  const key: ts.Type = generic[0]!;
  const value: ts.Type = generic[1]!;

  ArrayUtil.set(
    props.metadata.maps,
    MetadataMap.create({
      key: explore_metadata({
        ...props,
        type: key,
        explore: {
          ...props.explore,
          escaped: false,
          aliased: false,
        },
        intersected: false,
      }),
      value: explore_metadata({
        ...props,
        type: value,
        explore: {
          ...props.explore,
          escaped: false,
          aliased: false,
        },
        intersected: false,
      }),
      tags: [],
    }),
    (elem) => `Map<${elem.key.getName()}, ${elem.value.getName()}>`,
  );
  return true;
};
