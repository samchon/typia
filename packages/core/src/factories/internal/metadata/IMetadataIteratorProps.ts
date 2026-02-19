import ts from "typescript";

import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataStorage } from "../../MetadataStorage";

export interface IMetadataIteratorProps<Type extends ts.Type = ts.Type> {
  options: MetadataFactory.IOptions;
  checker: ts.TypeChecker;
  components: MetadataStorage;
  errors: MetadataFactory.IError[];
  metadata: MetadataSchema;
  type: Type;
  explore: MetadataFactory.IExplore;
  intersected?: boolean;
}
