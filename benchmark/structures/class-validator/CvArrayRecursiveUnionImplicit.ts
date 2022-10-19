import * as tr from "class-transformer";
import * as cv from "class-validator";

export class CvArrayRecursiveUnionImplicit {
    @cv.IsNumber()
    id!: number;

    @cv.IsString()
    name!: string;

    @cv.IsString()
    path!: string;

    @cv.IsOptional()
    @cv.IsArray()
    @cv.ValidateNested({ each: true })
    @tr.Type(() => CvArrayRecursiveUnionImplicit)
    children?: CvArrayRecursiveUnionImplicit[];

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
    @tr.Type(() => CvArrayRecursiveUnionImplicit)
    target?: CvArrayRecursiveUnionImplicit;
}
