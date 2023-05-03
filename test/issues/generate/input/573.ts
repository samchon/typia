import typia from "../../../../src";
import { ISomeOutputDto } from "../structures/ISomeOutputDto";

export const isSomeOutputDto = typia.createAssert<ISomeOutputDto>();
