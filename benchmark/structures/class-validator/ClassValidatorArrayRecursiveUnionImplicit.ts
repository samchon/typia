import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

export class ClassValidatorArrayRecursiveUnionImplicit {
    @cv.IsNumber()
    id!: number;

    @cv.IsString()
    name!: string;

    @cv.IsString()
    path!: string;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @cv.IsObject()
    @tr.Type(() => ClassValidatorArrayRecursiveUnionImplicit)
    children?: ClassValidatorArrayRecursiveUnionImplicit[];

    @cv.IsOptional()
    @cv.IsNumber()
    width?: number;

    @cv.IsOptional()
    @cv.IsNumber()
    height?: number;

    @cv.IsOptional()
    @cv.IsString()
    url?: string;

    @cv.IsOptional()
    @cv.IsNumber()
    size?: number;

    @cv.IsOptional()
    @cv.IsString()
    content?: string;

    @cv.IsOptional()
    @cv.IsNumber()
    count?: number;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorArrayRecursiveUnionImplicit)
    target?: ClassValidatorArrayRecursiveUnionImplicit;

    @cv.IsOptional()
    @cv.IsString()
    @cv.IsIn(["read", "write"])
    access?: string;
}
