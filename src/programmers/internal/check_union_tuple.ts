import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";
import { MetadataTuple } from "../../metadata/MetadataTuple";

import { IProject } from "../../transformers/IProject";

import { CheckerProgrammer } from "../CheckerProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";

/**
 * @internal
 * @todo Faster union checking logic is required
 */
export const check_union_tuple =
    (project: IProject) =>
    (config: CheckerProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
        _front: ts.Expression,
        tuple: MetadataTuple,
        explore: CheckerProgrammer.IExplore,
        tags: IMetadataTag[],
        jsDocTags: ts.JSDocTagInfo[],
        array: ts.Expression,
    ) =>
        CheckerProgrammer.decode_tuple(project)(config)(importer)(true)(
            array,
            tuple,
            explore,
            tags,
            jsDocTags,
        );
