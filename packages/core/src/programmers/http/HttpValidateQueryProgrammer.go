package http

var HttpValidateQueryProgrammer = httpValidateQueryProgrammerNamespace{}

type httpValidateQueryProgrammerNamespace struct{}

func (httpValidateQueryProgrammerNamespace) Write(typeText string) string {
	return httpValidateWrap(httpDecodeQueryFunction(), typeText)
}
