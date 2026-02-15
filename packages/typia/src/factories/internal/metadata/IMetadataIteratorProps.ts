import ts from "typescript";

import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { MetadataComponents } from "../../MetadataComponents";
import { MetadataFactory } from "../../MetadataFactory";

export interface IMetadataIteratorProps<Type extends ts.Type = ts.Type> {
  options: MetadataFactory.IOptions;
  checker: ts.TypeChecker;
  components: MetadataComponents;
  errors: MetadataFactory.IError[];
  metadata: MetadataSchema;
  type: Type;
  explore: MetadataFactory.IExplore;
  intersected?: boolean;
}
