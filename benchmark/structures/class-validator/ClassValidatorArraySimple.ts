import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

export class ClassValidatorArraySimple {
    @cv.IsString()
    name!: string;

    @cv.IsString()
    email!: string;

    @cv.ValidateNested({ each: true })
    @cv.IsArray()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorHobby)
    hobbies!: ClassValidatorHobby[];
}

class ClassValidatorHobby {
    @cv.IsString()
    name!: string;

    @cv.IsNumber()
    rank!: number;

    @cv.IsString()
    body!: string;
}
