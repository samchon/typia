import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";

export interface IMetadataIteratorProps<Type extends ts.Type = ts.Type> {
  options: MetadataFactory.IOptions;
  checker: ts.TypeChecker;
  collection: MetadataCollection;
  errors: MetadataFactory.IError[];
  metadata: Metadata;
  type: Type;
  explore: MetadataFactory.IExplore;
  intersected?: boolean;
}
