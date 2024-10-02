import ts from "typescript";

import { MetadataAlias } from "../../../schemas/metadata/MetadataAlias";

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
  const alias: MetadataAlias = emplace_metadata_alias(props);
  ArrayUtil.add(
    props.metadata.aliases,
    alias,
    (elem) => elem.name === alias.name,
  );
  return true;
};
