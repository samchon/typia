import { ArrayUtil } from "@typia/utils";
import ts from "typescript";

import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { MetadataSet } from "../../../schemas/metadata/MetadataSet";
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
    aliasTypeArguments: false,
  });
  const generic = props.checker.getTypeArguments(type as ts.TypeReference);
  if (name.substring(0, 4) !== "Set<" || generic?.length !== 1) return false;

  const key: ts.Type = generic[0]!;
  const value: MetadataSchema = explore_metadata({
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
