import ts from "typescript";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { TypeFactory } from "../../TypeFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_set = (
  props: IMetadataIteratorProps,
): boolean => {
  const type: ts.Type = props.checker.getApparentType(props.type);

  const name = TypeFactory.getFullName(props.checker)(type, type.getSymbol());
  const generic = type.aliasSymbol
    ? type.aliasTypeArguments
    : props.checker.getTypeArguments(type as ts.TypeReference);
  if (name.substring(0, 4) !== "Set<" || generic?.length !== 1) return false;

  const key: ts.Type = generic[0]!;
  ArrayUtil.set(
    props.metadata.sets,
    explore_metadata({
      ...props,
      type: key,
      explore: {
        ...props.explore,
        escaped: false,
        aliased: false,
      },
    }),
    (elem) => elem.getName(),
  );
  return true;
};
