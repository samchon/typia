import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../../schemas/metadata/MetadataEscaped";

import { Writable } from "../../../typings/Writable";

import { TypeFactory } from "../../TypeFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_escape = (
  props: IMetadataIteratorProps,
): boolean => {
  if (props.options.escape === false || props.explore.escaped === true)
    return false;

  const escaped: ts.Type | null = TypeFactory.getReturnTypeOfClassMethod({
    checker: props.checker,
    class: props.type,
    function: "toJSON",
  });
  if (escaped === null) return false;

  if (props.metadata.escaped === null) {
    Writable(props.metadata).escaped = MetadataEscaped.create({
      original: Metadata.initialize(),
      returns: Metadata.initialize(),
    });
  }
  iterate_metadata({
    ...props,
    metadata: props.metadata.escaped!.original,
    explore: {
      ...props.explore,
      escaped: true,
    },
  });
  iterate_metadata({
    ...props,
    metadata: props.metadata.escaped!.returns,
    type: escaped,
    explore: {
      ...props.explore,
      escaped: true,
    },
  });
  return true;
};
