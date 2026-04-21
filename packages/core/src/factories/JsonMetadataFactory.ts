import { ValidationPipe } from "@typia/interface";
import ts from "@typescript/native-preview";

import { TransformerError } from "../context/TransformerError";
import { AtomicPredicator } from "../programmers/helpers/AtomicPredicator";
import { MetadataCollection } from "../schemas/metadata/MetadataCollection";
import { MetadataSchema } from "../schemas/metadata/MetadataSchema";
import { MetadataFactory } from "./MetadataFactory";

export namespace JsonMetadataFactory {
  export interface IProps {
    method: string;
    checker: ts.TypeChecker;
    transformer?: ts.TransformationContext;
    type: ts.Type;
    validate?: MetadataFactory.Validator;
  }
  export interface IOutput {
    collection: MetadataCollection;
    metadata: MetadataSchema;
  }

  export const analyze = (props: IProps): IOutput => {
    const collection: MetadataCollection = new MetadataCollection();
    const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.checker,
        transformer: props.transformer,
        options: {
          absorb: true,
          escape: true,
          constant: true,
          validate: props.validate
            ? (next) => {
                const errors: string[] = validate(next);
                errors.push(...props.validate!(next));
                return errors;
              }
            : (next) => validate(next),
        },
        components: collection,
        type: props.type,
      });
    if (result.success === false)
      throw TransformerError.from({
        code: props.method,
        errors: result.errors,
      });
    return {
      collection,
      metadata: result.data,
    };
  };

  export const validate = (props: {
    metadata: MetadataSchema;
    explore: MetadataFactory.IExplore;
  }): string[] => {
    const output: string[] = [];
    if (
      props.metadata.atomics.some((a) => a.type === "bigint") ||
      props.metadata.constants.some((c) => c.type === "bigint")
    )
      output.push("JSON does not support bigint type.");
    if (
      props.metadata.tuples.some((t) =>
        t.type.elements.some((e) => e.isRequired() === false),
      ) ||
      props.metadata.arrays.some((a) => a.type.value.isRequired() === false)
    )
      output.push("JSON does not support undefined type in array.");
    if (props.metadata.maps.length)
      output.push("JSON does not support Map type.");
    if (props.metadata.sets.length)
      output.push("JSON does not support Set type.");
    for (const native of props.metadata.natives)
      if (
        AtomicPredicator.native(native.name) === false &&
        native.name !== "Date"
      )
        output.push(`JSON does not support ${native.name} type.`);
    return output;
  };
}
