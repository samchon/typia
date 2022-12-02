import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_UltimateUnion = _test_message(
    "UltimateUnion",
    TSON.message<UltimateUnion>(),
    `syntax = \"proto3\";

message IJsonApplication {
    repeated Array.Element_lt__lp_IJsonSchema.IArray_space__or__space_IJsonSchema.IBigInt_space__or__space_IJsonSchema.IBoolean_space__or__space_IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt__space__or__space_IJsonSchema.INullOnly_space__or__space_IJsonSchema.INumber_space__or__space_IJsonSchema.IOneOf_space__or__space_IJsonSchema.IRecursiveReference_space__or__space_IJsonSchema.IReference_space__or__space_IJsonSchema.IString_space__or__space_IJsonSchema.ITuple_space__or__space_IJsonSchema.IUnknown_rp__gt_ schemas = 1;
    IJsonComponents components = 2;
    string purpose = 3;
    string prefix = 4;
}

message Array {
    message Element_lt__lp_IJsonSchema {
        message IArray_space__or__space_IJsonSchema {
            message IBigInt_space__or__space_IJsonSchema {
                message IBoolean_space__or__space_IJsonSchema {
                    message IEnumeration_lt__doublequote_bigint_doublequote__gt__space__or__space_IJsonSchema {
                        message IEnumeration_lt__doublequote_boolean_doublequote__gt__space__or__space_IJsonSchema {
                            message IEnumeration_lt__doublequote_number_doublequote__gt__space__or__space_IJsonSchema {
                                message IEnumeration_lt__doublequote_string_doublequote__gt__space__or__space_IJsonSchema {
                                    message INullOnly_space__or__space_IJsonSchema {
                                        message INumber_space__or__space_IJsonSchema {
                                            message IOneOf_space__or__space_IJsonSchema {
                                                message IRecursiveReference_space__or__space_IJsonSchema {
                                                    message IReference_space__or__space_IJsonSchema {
                                                        message IString_space__or__space_IJsonSchema {
                                                            message ITuple_space__or__space_IJsonSchema {
                                                                message IUnknown_rp__gt_ {
                                                                    oneof value {
                                                                        IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_ o0 = 1;
                                                                        IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_ o1 = 2;
                                                                        IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_ o2 = 3;
                                                                        IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_ o3 = 4;
                                                                        IJsonSchema.IBoolean o4 = 5;
                                                                        IJsonSchema.INumber o5 = 6;
                                                                        IJsonSchema.IBigInt o6 = 7;
                                                                        IJsonSchema.IString o7 = 8;
                                                                        IJsonSchema.IArray o8 = 9;
                                                                        IJsonSchema.ITuple o9 = 10;
                                                                        IJsonSchema.IOneOf o10 = 11;
                                                                        IJsonSchema.IReference o11 = 12;
                                                                        IJsonSchema.IRecursiveReference o12 = 13;
                                                                        IJsonSchema.INullOnly o13 = 14;
                                                                        IJsonSchema.IUnknown o14 = 15;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    message Element_lt__lp_IMetadataTag {
        message IBigintType_space__or__space_IMetadataTag {
            message IExclusiveMaximum_space__or__space_IMetadataTag {
                message IExclusiveMinimum_space__or__space_IMetadataTag {
                    message IFormat_space__or__space_IMetadataTag {
                        message IItems_space__or__space_IMetadataTag {
                            message ILength_space__or__space_IMetadataTag {
                                message IMaxItems_space__or__space_IMetadataTag {
                                    message IMaxLength_space__or__space_IMetadataTag {
                                        message IMaximum_space__or__space_IMetadataTag {
                                            message IMinItems_space__or__space_IMetadataTag {
                                                message IMinLength_space__or__space_IMetadataTag {
                                                    message IMinimum_space__or__space_IMetadataTag {
                                                        message IMultipleOf_space__or__space_IMetadataTag {
                                                            message INumberType_space__or__space_IMetadataTag {
                                                                message IPattern_space__or__space_IMetadataTag {
                                                                    message IRange_space__or__space_IMetadataTag {
                                                                        message IStep_rp__gt_ {
                                                                            oneof value {
                                                                                IMetadataTag.IItems o0 = 1;
                                                                                IMetadataTag.IMinItems o1 = 2;
                                                                                IMetadataTag.IMaxItems o2 = 3;
                                                                                IMetadataTag.IFormat o3 = 4;
                                                                                IMetadataTag.IPattern o4 = 5;
                                                                                IMetadataTag.ILength o5 = 6;
                                                                                IMetadataTag.IMinLength o6 = 7;
                                                                                IMetadataTag.IMaxLength o7 = 8;
                                                                                IMetadataTag.INumberType o8 = 9;
                                                                                IMetadataTag.IRange o9 = 10;
                                                                                IMetadataTag.IMinimum o10 = 11;
                                                                                IMetadataTag.IMaximum o11 = 12;
                                                                                IMetadataTag.IExclusiveMinimum o12 = 13;
                                                                                IMetadataTag.IExclusiveMaximum o13 = 14;
                                                                                IMetadataTag.IMultipleOf o14 = 15;
                                                                                IMetadataTag.IStep o15 = 16;
                                                                                IMetadataTag.IBigintType o16 = 17;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

message IJsonSchema {
    message IEnumeration_lt__doublequote_boolean_doublequote__gt_ {
        repeated boolean enum = 1;
        optional bool default = 2;
        string type = 3;
        bool nullable = 4;
        optional bool deprecated = 5;
        optional string title = 6;
        optional string description = 7;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 8;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 9;
        optional bool x-tson-required = 10;
    }

    message IEnumeration_lt__doublequote_number_doublequote__gt_ {
        repeated number enum = 1;
        optional double default = 2;
        string type = 3;
        bool nullable = 4;
        optional bool deprecated = 5;
        optional string title = 6;
        optional string description = 7;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 8;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 9;
        optional bool x-tson-required = 10;
    }

    message IEnumeration_lt__doublequote_bigint_doublequote__gt_ {
        repeated bigint enum = 1;
        optional int64 default = 2;
        string type = 3;
        bool nullable = 4;
        optional bool deprecated = 5;
        optional string title = 6;
        optional string description = 7;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 8;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 9;
        optional bool x-tson-required = 10;
    }

    message IEnumeration_lt__doublequote_string_doublequote__gt_ {
        repeated string enum = 1;
        optional string default = 2;
        string type = 3;
        bool nullable = 4;
        optional bool deprecated = 5;
        optional string title = 6;
        optional string description = 7;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 8;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 9;
        optional bool x-tson-required = 10;
    }

    message IBoolean {
        optional bool default = 1;
        string type = 2;
        bool nullable = 3;
        optional bool deprecated = 4;
        optional string title = 5;
        optional string description = 6;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 7;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 8;
        optional bool x-tson-required = 9;
    }

    message INumber {
        optional double minimum = 1;
        optional double maximum = 2;
        optional double exclusiveMinimum = 3;
        optional double exclusiveMaximum = 4;
        optional double multipleOf = 5;
        optional double default = 6;
        string type = 7;
        bool nullable = 8;
        optional bool deprecated = 9;
        optional string title = 10;
        optional string description = 11;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 12;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 13;
        optional bool x-tson-required = 14;
    }

    message IBigInt {
        optional int64 default = 1;
        string type = 2;
        bool nullable = 3;
        optional bool deprecated = 4;
        optional string title = 5;
        optional string description = 6;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 7;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 8;
        optional bool x-tson-required = 9;
    }

    message IString {
        optional double minLength = 1;
        optional double maxLength = 2;
        optional string pattern = 3;
        optional string format = 4;
        optional string default = 5;
        string type = 6;
        bool nullable = 7;
        optional bool deprecated = 8;
        optional string title = 9;
        optional string description = 10;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 11;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 12;
        optional bool x-tson-required = 13;
    }

    message IArray {
        oneof items {
            IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_ o0 = 1;
            IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_ o1 = 2;
            IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_ o2 = 3;
            IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_ o3 = 4;
            IJsonSchema.IBoolean o4 = 5;
            IJsonSchema.INumber o5 = 6;
            IJsonSchema.IBigInt o6 = 7;
            IJsonSchema.IString o7 = 8;
            IJsonSchema.IArray o8 = 9;
            IJsonSchema.ITuple o9 = 10;
            IJsonSchema.IOneOf o10 = 11;
            IJsonSchema.IReference o11 = 12;
            IJsonSchema.IRecursiveReference o12 = 13;
            IJsonSchema.INullOnly o13 = 14;
            IJsonSchema.IUnknown o14 = 15;
        }
        optional double minItems = 16;
        optional double maxItems = 17;
        string type = 18;
        bool nullable = 19;
        optional bool deprecated = 20;
        optional string title = 21;
        optional string description = 22;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 23;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 24;
        optional bool x-tson-required = 25;
    }

    message ITuple {
        repeated Array.Element_lt__lp_IJsonSchema.IArray_space__or__space_IJsonSchema.IBigInt_space__or__space_IJsonSchema.IBoolean_space__or__space_IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt__space__or__space_IJsonSchema.INullOnly_space__or__space_IJsonSchema.INumber_space__or__space_IJsonSchema.IOneOf_space__or__space_IJsonSchema.IRecursiveReference_space__or__space_IJsonSchema.IReference_space__or__space_IJsonSchema.IString_space__or__space_IJsonSchema.ITuple_space__or__space_IJsonSchema.IUnknown_rp__gt_ items = 1;
        string type = 2;
        bool nullable = 3;
        optional bool deprecated = 4;
        optional string title = 5;
        optional string description = 6;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 7;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 8;
        optional bool x-tson-required = 9;
    }

    message IOneOf {
        repeated Array.Element_lt__lp_IJsonSchema.IArray_space__or__space_IJsonSchema.IBigInt_space__or__space_IJsonSchema.IBoolean_space__or__space_IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt__space__or__space_IJsonSchema.INullOnly_space__or__space_IJsonSchema.INumber_space__or__space_IJsonSchema.IOneOf_space__or__space_IJsonSchema.IRecursiveReference_space__or__space_IJsonSchema.IReference_space__or__space_IJsonSchema.IString_space__or__space_IJsonSchema.ITuple_space__or__space_IJsonSchema.IUnknown_rp__gt_ oneOf = 1;
        optional bool deprecated = 2;
        optional string title = 3;
        optional string description = 4;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 5;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 6;
        optional bool x-tson-required = 7;
    }

    message IReference {
        string $ref = 1;
        optional bool deprecated = 2;
        optional string title = 3;
        optional string description = 4;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 5;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 6;
        optional bool x-tson-required = 7;
    }

    message IRecursiveReference {
        string $recursiveRef = 1;
        optional bool deprecated = 2;
        optional string title = 3;
        optional string description = 4;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 5;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 6;
        optional bool x-tson-required = 7;
    }

    message INullOnly {
        string type = 1;
        optional bool deprecated = 2;
        optional string title = 3;
        optional string description = 4;
        optional repeated Array.Element_lt__lp_IMetadataTag.IBigintType_space__or__space_IMetadataTag.IExclusiveMaximum_space__or__space_IMetadataTag.IExclusiveMinimum_space__or__space_IMetadataTag.IFormat_space__or__space_IMetadataTag.IItems_space__or__space_IMetadataTag.ILength_space__or__space_IMetadataTag.IMaxItems_space__or__space_IMetadataTag.IMaxLength_space__or__space_IMetadataTag.IMaximum_space__or__space_IMetadataTag.IMinItems_space__or__space_IMetadataTag.IMinLength_space__or__space_IMetadataTag.IMinimum_space__or__space_IMetadataTag.IMultipleOf_space__or__space_IMetadataTag.INumberType_space__or__space_IMetadataTag.IPattern_space__or__space_IMetadataTag.IRange_space__or__space_IMetadataTag.IStep_rp__gt_ x-tson-metaTags = 5;
        optional repeated IJsDocTagInfo x-tson-jsDocTags = 6;
        optional bool x-tson-required = 7;
    }
}

message IMetadataTag {
    message IItems {
        string kind = 1;
        optional IMetadataTag.ISign minimum = 2;
        optional IMetadataTag.ISign maximum = 3;
    }

    message ISign {
        bool include = 1;
        double value = 2;
    }

    message IMinItems {
        string kind = 1;
        double value = 2;
    }

    message IMaxItems {
        string kind = 1;
        double value = 2;
    }

    message IFormat {
        string kind = 1;
        string value = 2;
    }

    message IPattern {
        string kind = 1;
        string value = 2;
    }

    message ILength {
        string kind = 1;
        optional IMetadataTag.ISign minimum = 2;
        optional IMetadataTag.ISign maximum = 3;
    }

    message IMinLength {
        string kind = 1;
        double value = 2;
    }

    message IMaxLength {
        string kind = 1;
        double value = 2;
    }

    message INumberType {
        string kind = 1;
        string value = 2;
    }

    message IRange {
        string kind = 1;
        optional IMetadataTag.ISign minimum = 2;
        optional IMetadataTag.ISign maximum = 3;
    }

    message IMinimum {
        string kind = 1;
        double value = 2;
    }

    message IMaximum {
        string kind = 1;
        double value = 2;
    }

    message IExclusiveMinimum {
        string kind = 1;
        double value = 2;
    }

    message IExclusiveMaximum {
        string kind = 1;
        double value = 2;
    }

    message IMultipleOf {
        string kind = 1;
        double value = 2;
    }

    message IStep {
        string kind = 1;
        double value = 2;
    }

    message IBigintType {
        string kind = 1;
        string value = 2;
    }
}

message IJsDocTagInfo {
    string name = 1;
    optional repeated IJsDocTagInfo.IText text = 2;


    message IText {
        string text = 1;
        string kind = 2;
    }
}

message IJsonComponents {
    map<string, IJsonComponents.IObject> schemas = 1;


    message IObject {
        optional string $id = 1;
        string type = 2;
        bool nullable = 3;
        map<string, Object.Value_lt__lp_IJsonSchema.IArray_space__or__space_IJsonSchema.IBigInt_space__or__space_IJsonSchema.IBoolean_space__or__space_IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt__space__or__space_IJsonSchema.INullOnly_space__or__space_IJsonSchema.INumber_space__or__space_IJsonSchema.IOneOf_space__or__space_IJsonSchema.IRecursiveReference_space__or__space_IJsonSchema.IReference_space__or__space_IJsonSchema.IString_space__or__space_IJsonSchema.ITuple_space__or__space_IJsonSchema.IUnknown_rp__gt_> properties = 4;
        optional map<string, Object.Value_lt__lp_IJsonSchema.IArray_space__or__space_IJsonSchema.IBigInt_space__or__space_IJsonSchema.IBoolean_space__or__space_IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt__space__or__space_IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt__space__or__space_IJsonSchema.INullOnly_space__or__space_IJsonSchema.INumber_space__or__space_IJsonSchema.IOneOf_space__or__space_IJsonSchema.IRecursiveReference_space__or__space_IJsonSchema.IReference_space__or__space_IJsonSchema.IString_space__or__space_IJsonSchema.ITuple_space__or__space_IJsonSchema.IUnknown_rp__gt_> patternProperties = 5;
        oneof additionalProperties {
            IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_ o0 = 6;
            IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_ o1 = 7;
            IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_ o2 = 8;
            IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_ o3 = 9;
            IJsonSchema.IBoolean o4 = 10;
            IJsonSchema.INumber o5 = 11;
            IJsonSchema.IBigInt o6 = 12;
            IJsonSchema.IString o7 = 13;
            IJsonSchema.IArray o8 = 14;
            IJsonSchema.ITuple o9 = 15;
            IJsonSchema.IOneOf o10 = 16;
            IJsonSchema.IReference o11 = 17;
            IJsonSchema.IRecursiveReference o12 = 18;
            IJsonSchema.INullOnly o13 = 19;
            IJsonSchema.IUnknown o14 = 20;
        }
        optional repeated string required = 21;
        optional string description = 22;
        optional repeated IJsDocTagInfo x-tson_jsDocTags = 23;
        optional bool $recursiveAnchor = 24;
    }
}

message Object {
    message Value_lt__lp_IJsonSchema {
        message IArray_space__or__space_IJsonSchema {
            message IBigInt_space__or__space_IJsonSchema {
                message IBoolean_space__or__space_IJsonSchema {
                    message IEnumeration_lt__doublequote_bigint_doublequote__gt__space__or__space_IJsonSchema {
                        message IEnumeration_lt__doublequote_boolean_doublequote__gt__space__or__space_IJsonSchema {
                            message IEnumeration_lt__doublequote_number_doublequote__gt__space__or__space_IJsonSchema {
                                message IEnumeration_lt__doublequote_string_doublequote__gt__space__or__space_IJsonSchema {
                                    message INullOnly_space__or__space_IJsonSchema {
                                        message INumber_space__or__space_IJsonSchema {
                                            message IOneOf_space__or__space_IJsonSchema {
                                                message IRecursiveReference_space__or__space_IJsonSchema {
                                                    message IReference_space__or__space_IJsonSchema {
                                                        message IString_space__or__space_IJsonSchema {
                                                            message ITuple_space__or__space_IJsonSchema {
                                                                message IUnknown_rp__gt_ {
                                                                    oneof value {
                                                                        IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_ o0 = 1;
                                                                        IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_ o1 = 2;
                                                                        IJsonSchema.IEnumeration_lt__doublequote_bigint_doublequote__gt_ o2 = 3;
                                                                        IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_ o3 = 4;
                                                                        IJsonSchema.IBoolean o4 = 5;
                                                                        IJsonSchema.INumber o5 = 6;
                                                                        IJsonSchema.IBigInt o6 = 7;
                                                                        IJsonSchema.IString o7 = 8;
                                                                        IJsonSchema.IArray o8 = 9;
                                                                        IJsonSchema.ITuple o9 = 10;
                                                                        IJsonSchema.IOneOf o10 = 11;
                                                                        IJsonSchema.IReference o11 = 12;
                                                                        IJsonSchema.IRecursiveReference o12 = 13;
                                                                        IJsonSchema.INullOnly o13 = 14;
                                                                        IJsonSchema.IUnknown o14 = 15;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

message __Main {
    repeated IJsonApplication value = 1;
}`,
);
