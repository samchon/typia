import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { emend_metadata_atomics } from "./emend_metadata_atomics";
import { iterate_metadata } from "./iterate_metadata";

export const explore_metadata = (props: Required<IProps>): Metadata => {
  // CONSTRUCT METADATA
  const metadata: Metadata = Metadata.initialize(props.explore.escaped);
  if (props.type === null) return metadata;

  // ITERATE TYPESCRIPT TYPES
  props.intersected ??= false;
  iterate_metadata({
    ...props,
    metadata,
    type: props.type,
  });
  emend_metadata_atomics(metadata);
  if (metadata.escaped) {
    emend_metadata_atomics(metadata.escaped.original);
    emend_metadata_atomics(metadata.escaped.returns);
  }
  return metadata;
};

interface IProps extends Omit<IMetadataIteratorProps, "metadata" | "type"> {
  type: ts.Type | null;
}
