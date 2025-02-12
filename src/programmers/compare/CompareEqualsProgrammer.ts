import ts from "typescript";

import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace CompareEqualsProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // ANALYZE TYPE
    const collection: MetadataCollection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: false,
        constant: true,
        absorb: true,
      },
      collection,
      type: props.type,
    });
    if (result.success === false) {
      throw TransformerError.from({
        code: props.functor.method,
        errors: result.errors,
      });
    }

    console.log(result.data);
    // DO TRANSFORM
    // const object = result.data.objects?.[0]!.type;
    // console.log(object.description);

    return {
      functions: {},
      statements: [],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        props.context.importer.type({
          file: "typia",
          name: "Resolved",
          arguments: [
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ],
        }),
        undefined,
        ts.factory.createBlock([], true),
      ),
    };
  };

  export const write = (props: IProgrammerProps) => {
    const functor = new FunctionProgrammer(props.modulo.getText());
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });
    console.log("-----------------------------------------------------");
    console.log(result);
    console.log("-----------------------------------------------------");
    console.log(props.modulo);
    console.log("-----------------------------------------------------");
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
}
