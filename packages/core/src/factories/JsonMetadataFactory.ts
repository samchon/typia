import ts from "typescript";

import { TransformerError } from "../context/TransformerError";
import { AtomicPredicator } from "../programmers/helpers/AtomicPredicator";
import { MetadataSchema } from "../schemas/metadata/MetadataSchema";
import { ValidationPipe } from "../typings/ValidationPipe";
import { MetadataFactory } from "./MetadataFactory";
import { MetadataStorage } from "./MetadataStorage";

export namespace JsonMetadataFactory {
  export interface IProps {
    method: string;
    checker: ts.TypeChecker;
    transformer?: ts.TransformationContext;
    type: ts.Type;
    validate?: MetadataFactory.Validator;
  }
  export interface IOutput {
    collection: MetadataStorage;
    metadata: MetadataSchema;
  }

  export const analyze = (props: IProps): IOutput => {
    const collection: MetadataStorage = new MetadataStorage();
    const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.checker,
        transformer: props.transformer,
        options: {
          absorb: true,
          escape: true,
          constant: true,
          validate: props.validate
            ? (meta, explore) => {
                const errors: string[] = validate(meta);
                errors.push(...props.validate!(meta, explore));
                return errors;
              }
            : validate,
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

  export const validate = (meta: MetadataSchema) => {
    const output: string[] = [];
    if (
      meta.atomics.some((a) => a.type === "bigint") ||
      meta.constants.some((c) => c.type === "bigint")
    )
      output.push("JSON does not support bigint type.");
    if (
      meta.tuples.some((t) =>
        t.type.elements.some((e) => e.isRequired() === false),
      ) ||
      meta.arrays.some((a) => a.type.value.isRequired() === false)
    )
      output.push("JSON does not support undefined type in array.");
    if (meta.maps.length) output.push("JSON does not support Map type.");
    if (meta.sets.length) output.push("JSON does not support Set type.");
    for (const native of meta.natives)
      if (
        AtomicPredicator.native(native.name) === false &&
        native.name !== "Date"
      )
        output.push(`JSON does not support ${native.name} type.`);
    return output;
  };
}
