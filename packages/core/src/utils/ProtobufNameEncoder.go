package utils

import "strings"

var ProtobufNameEncoder = protobufNameEncoderNamespace{}

type protobufNameEncoderNamespace struct{}

func (protobufNameEncoderNamespace) Encode(str string) string {
	for _, replacer := range REPLACERS {
		str = strings.ReplaceAll(str, replacer[0], replacer[1])
	}
	return str
}

func (protobufNameEncoderNamespace) Decode(str string) string {
	for _, replacer := range REPLACERS {
		if replacer[1] != "" {
			str = strings.ReplaceAll(str, replacer[1], replacer[0])
		}
	}
	return str
}

var REPLACERS = [][2]string{
	{"$", "_dollar_"},
	{"&", "_and_"},
	{"|", "_or_"},
	{"{", "_blt_"},
	{"}", "_bgt_"},
	{"<", "_lt_"},
	{">", "_gt_"},
	{"(", "_lp_"},
	{")", "_rp_"},
	{"[", "_alt_"},
	{"]", "_agt_"},
	{",", "_comma_"},
	{"`", "_backquote_"},
	{"'", "_singlequote_"},
	{"\"", "_doublequote_"},
	{" ", "_space_"},
}
