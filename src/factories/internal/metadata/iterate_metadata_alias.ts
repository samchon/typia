import ts from "typescript";

import { MetadataAlias } from "../../../schemas/metadata/MetadataAlias";
import { MetadataAliasType } from "../../../schemas/metadata/MetadataAliasType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { emplace_metadata_alias } from "./emplace_metadata_alias";

export const iterate_metadata_alias = (
  props: IMetadataIteratorProps,
): boolean => {
  if (props.options.absorb !== false || props.type.aliasSymbol === undefined)
    return false;

  const node: ts.Declaration | undefined =
    props.type.aliasSymbol.declarations?.[0];
  if (node === undefined) return false;

  // CONSTRUCT DEFINITION
  const type: MetadataAliasType = emplace_metadata_alias(props);
  ArrayUtil.take(
    props.metadata.aliases,
    (elem) => elem.type.name === type.name,
    () =>
      MetadataAlias.create({
        type,
        tags: [],
      }),
  );
  return true;
};
