import { IJsonSchemaUnit, OpenApi } from "@typia/interface";
import ts from "typescript";

import { ITypiaContext } from "../../context/ITypiaContext";
import { LiteralFactory } from "../../factories/LiteralFactory";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { JsonSchemasProgrammer } from "./JsonSchemasProgrammer";

export namespace JsonSchemaProgrammer {
  export const validate = (metadata: MetadataSchema): string[] =>
    JsonSchemasProgrammer.validate(metadata);

  export interface IWriteProps<Version extends "3.0" | "3.1"> {
    context: ITypiaContext;
    version: Version;
    metadata: MetadataSchema;
  }

  export const write = <Version extends "3.0" | "3.1">(
    props: IWriteProps<Version>,
  ): ts.Expression => {
    const schema: IJsonSchemaUnit<Version> = writeSchema({
      version: props.version,
      metadata: props.metadata,
    });

    return ts.factory.createAsExpression(
      LiteralFactory.write(schema),
      props.context.importer.type({
        file: "typia",
        name: "IJsonSchemaUnit",
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(props.version),
          ),
        ],
      }),
    );
  };

  export const writeSchema = <Version extends "3.0" | "3.1">(props: {
    version: Version;
    metadata: MetadataSchema;
  }): IJsonSchemaUnit<Version> => {
    const collection = JsonSchemasProgrammer.writeSchemas({
      version: props.version,
      metadatas: [props.metadata],
    });
    return {
      version: collection.version as "3.1",
      components: collection.components as OpenApi.IComponents,
      schema: collection.schemas[0] as OpenApi.IJsonSchema,
    } as IJsonSchemaUnit<Version>;
  };
}
