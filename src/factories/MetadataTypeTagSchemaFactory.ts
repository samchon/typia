import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObject } from "../schemas/metadata/MetadataObject";

export namespace MetadataTypeTagSchemaFactory {
  export const object =
    (report: (msg: string) => false) =>
    (obj: MetadataObject): object | undefined => {
      if (obj.recursive) {
        report(`${obj.name} has recursive type`);
        return undefined;
      }
      const output: any = {};
      for (const p of obj.properties) {
        const key: string | null = p.key.getSoleLiteral()!;
        if (key === null) {
          report(`${obj.name} has non-literal key type: ${p.key.getName()}`);
          continue;
        }
        output[key] = iterate(report)({ object: obj, key })(p.value);
      }
      return output;
    };

  const iterate =
    (report: (msg: string) => false) =>
    (parent: { object: MetadataObject; key: string }) =>
    (meta: Metadata): any => {
      if (
        meta.any ||
        meta.atomics.length ||
        meta.arrays.length ||
        meta.natives.length ||
        meta.functions.length
      )
        report(`${parent.object.name}.${parent.key} has non-literal type`);
      else if (meta.size() > 1)
        report(`${parent.object.name}.${parent.key} has union type`);
      else if (meta.size() === 0)
        if (meta.nullable) return null;
        else if (meta.isRequired() === true)
          report(`${parent.object.name}.${parent.key} has non-literal type`);
        else return undefined;
      else if (meta.constants.length)
        return meta.constants[0]!.values[0]!.value;
      else if (meta.tuples.length) {
        const tuple = meta.tuples[0]!;
        if (tuple.type.isRest())
          report(`${parent.object.name}.${parent.key} has rest tuple type`);
        else if (tuple.type.recursive)
          report(
            `${parent.object.name}.${parent.key} has recursive tuple type`,
          );
        else if (tuple.type.elements.some((e) => e.required === false))
          report(`${parent.object.name}.${parent.key} has optional tuple type`);
        return tuple.type.elements.map(iterate(report)(parent));
      } else if (meta.objects.length) return object(report)(meta.objects[0]!);
      else report(`${parent.object.name}.${parent.key} has non-literal type`);
    };
}
