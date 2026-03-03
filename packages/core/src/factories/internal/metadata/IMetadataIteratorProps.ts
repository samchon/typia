import ts from "typescript";

import { MetadataCollection } from "../../../schemas/metadata/MetadataCollection";
import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { MetadataFactory } from "../../MetadataFactory";

export interface IMetadataIteratorProps<Type extends ts.Type = ts.Type> {
  options: MetadataFactory.IOptions;
  checker: ts.TypeChecker;
  components: MetadataCollection;
  errors: MetadataFactory.IError[];
  metadata: MetadataSchema;
  type: Type;
  explore: MetadataFactory.IExplore;
  intersected?: boolean;
}
