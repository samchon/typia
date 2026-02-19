import { ArrayUtil } from "@typia/utils";

import { MetadataAliasType } from "../../../schemas/metadata/MetadataAliasType";
import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_alias = (
  props: IMetadataIteratorProps,
): MetadataAliasType => {
  // CHECK EXISTENCE
  const [alias, newbie, closure] = props.components.emplaceAlias(
    props.checker,
    props.type,
    props.type.aliasSymbol!,
  );
  ArrayUtil.add(alias.nullables, props.metadata.nullable);
  if (newbie === false) return alias;

  // CONSTRUCT VALUE TYPE
  const value: MetadataSchema = explore_metadata({
    ...props,
    explore: {
      ...props.explore,
      escaped: false,
      aliased: true,
    },
    intersected: false,
  });
  closure(value);
  return alias;
};
