import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataTemplate } from "../../../schemas/metadata/MetadataTemplate";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { MetadataHelper } from "./MetadataHelper";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_template = (
  props: IMetadataIteratorProps,
): boolean => {
  const filter = (flag: ts.TypeFlags) => (props.type.getFlags() & flag) !== 0;
  if (!filter(ts.TypeFlags.TemplateLiteral)) return false;

  const template: ts.TemplateLiteralType = props.type as ts.TemplateLiteralType;
  const row: Metadata[] = [];

  template.texts.forEach((text, i) => {
    // TEXT LITERAL TYPE
    if (text !== "") row.push(MetadataHelper.literal_to_metadata(text));

    // BINDED TEMPLATE TYPE
    const binded: ts.Type | undefined = template.types[i];
    if (binded)
      row.push(
        explore_metadata({
          ...props,
          type: binded,
          explore: {
            ...props.explore,
            escaped: false,
            aliased: false,
          },
          intersected: false,
        }),
      );
  });
  props.metadata.templates.push(MetadataTemplate.create({ row, tags: [] }));
  return true;
};
