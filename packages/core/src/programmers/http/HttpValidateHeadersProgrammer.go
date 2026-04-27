package http

var HttpValidateHeadersProgrammer = httpValidateHeadersProgrammerNamespace{}

type httpValidateHeadersProgrammerNamespace struct{}

func (httpValidateHeadersProgrammerNamespace) Write(typeText string) string {
	return httpValidateWrap(httpDecodeHeadersFunction(), typeText)
}
