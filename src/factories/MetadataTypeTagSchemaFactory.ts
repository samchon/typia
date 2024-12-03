import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";

export namespace MetadataTypeTagSchemaFactory {
  export const object = (props: {
    report: (msg: string) => false;
    object: MetadataObjectType;
  }): object | undefined => {
    if (props.object.recursive) {
      props.report(`${props.object.name} has recursive type`);
      return undefined;
    }
    const output: any = {};
    for (const p of props.object.properties) {
      const key: string | null = p.key.getSoleLiteral()!;
      if (key === null) {
        props.report(
          `${props.object.name} has non-literal key type: ${p.key.getName()}`,
        );
        continue;
      }
      output[key] = iterate({
        report: props.report,
        object: props.object,
        key,
        metadata: p.value,
      });
    }
    return output;
  };

  const iterate = (props: {
    report: (message: string) => false;
    object: MetadataObjectType;
    key: string;
    metadata: Metadata;
  }): any => {
    if (
      props.metadata.any ||
      props.metadata.atomics.length ||
      props.metadata.arrays.length ||
      props.metadata.natives.length ||
      props.metadata.functions.length
    )
      props.report(`${props.object.name}.${props.key} has non-literal type`);
    else if (props.metadata.size() > 1)
      props.report(`${props.object.name}.${props.key} has union type`);
    else if (props.metadata.size() === 0)
      if (props.metadata.nullable) return null;
      else if (props.metadata.isRequired() === true)
        props.report(`${props.object.name}.${props.key} has non-literal type`);
      else return undefined;
    else if (props.metadata.constants.length)
      return props.metadata.constants[0]!.values[0]!.value;
    else if (props.metadata.tuples.length) {
      const tuple = props.metadata.tuples[0]!;
      if (tuple.type.isRest())
        props.report(`${props.object.name}.${props.key} has rest tuple type`);
      else if (tuple.type.recursive)
        props.report(
          `${props.object.name}.${props.key} has recursive tuple type`,
        );
      else if (tuple.type.elements.some((e) => e.required === false))
        props.report(
          `${props.object.name}.${props.key} has optional tuple type`,
        );
      return tuple.type.elements.map((elem) =>
        iterate({
          report: props.report,
          object: props.object,
          key: props.key,
          metadata: elem,
        }),
      );
    } else if (props.metadata.objects.length)
      return object({
        report: props.report,
        object: props.metadata.objects[0]!.type,
      });
    else props.report(`${props.object.name}.${props.key} has non-literal type`);
  };
}
