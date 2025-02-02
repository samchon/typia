import type ts from "typescript";

import type { Metadata } from "../../../schemas/metadata/Metadata";

import type { MetadataCollection } from "../../MetadataCollection";
import type { MetadataFactory } from "../../MetadataFactory";

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
