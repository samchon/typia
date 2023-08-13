//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TagDefault$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(8).bool(m.boolean)
  w.uint32(17).double(m.number)
  w.uint32(26).string(m.string)
  w.uint32(34).string(m.text)
  w.uint32(42).string(m.template)
  if(m.v6!=null&&Object.hasOwnProperty.call(m,"v6"))
  w.uint32(50).string(m.v6)
  if(m.v7!=null&&Object.hasOwnProperty.call(m,"v7"))
  w.uint32(57).double(m.v7)
  if(m.v8!=null&&Object.hasOwnProperty.call(m,"v8"))
  w.uint32(64).bool(m.v8)
  if(m.v9!=null&&Object.hasOwnProperty.call(m,"v9"))
  w.uint32(74).string(m.v9)
  if(m.v10!=null&&Object.hasOwnProperty.call(m,"v10"))
  w.uint32(81).double(m.v10)
  if(m.v11!=null&&Object.hasOwnProperty.call(m,"v11"))
  w.uint32(88).bool(m.v11)
  if(m.v12!=null&&Object.hasOwnProperty.call(m,"v12"))
  w.uint32(98).string(m.v12)
  if(m.v13!=null&&Object.hasOwnProperty.call(m,"v13"))
  w.uint32(105).double(m.v13)
  if(m.v14!=null&&Object.hasOwnProperty.call(m,"v14"))
  w.uint32(112).bool(m.v14)
  if(m.v15!=null&&Object.hasOwnProperty.call(m,"v15"))
  w.uint32(122).string(m.v15)
  if(m.v16!=null&&Object.hasOwnProperty.call(m,"v16"))
  w.uint32(129).double(m.v16)
  if(m.v17!=null&&Object.hasOwnProperty.call(m,"v17"))
  w.uint32(136).bool(m.v17)
  w.uint32(145).double(m.vulnerableRange)
  w.uint32(154).string(m.vulnerableTemplate)
  if(m.v20!=null&&Object.hasOwnProperty.call(m,"v20"))
  w.uint32(162).string(m.v20)
  if(m.v21!=null&&Object.hasOwnProperty.call(m,"v21"))
  w.uint32(169).double(m.v21)
  if(m.v22!=null&&Object.hasOwnProperty.call(m,"v22"))
  w.uint32(176).bool(m.v22)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TagDefault$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.boolean=r.bool()
  break
  }
  case 2: {
  m.number=r.double()
  break
  }
  case 3: {
  m.string=r.string()
  break
  }
  case 4: {
  m.text=r.string()
  break
  }
  case 5: {
  m.template=r.string()
  break
  }
  case 6: {
  m.v6=r.string()
  break
  }
  case 7: {
  m.v7=r.double()
  break
  }
  case 8: {
  m.v8=r.bool()
  break
  }
  case 9: {
  m.v9=r.string()
  break
  }
  case 10: {
  m.v10=r.double()
  break
  }
  case 11: {
  m.v11=r.bool()
  break
  }
  case 12: {
  m.v12=r.string()
  break
  }
  case 13: {
  m.v13=r.double()
  break
  }
  case 14: {
  m.v14=r.bool()
  break
  }
  case 15: {
  m.v15=r.string()
  break
  }
  case 16: {
  m.v16=r.double()
  break
  }
  case 17: {
  m.v17=r.bool()
  break
  }
  case 18: {
  m.vulnerableRange=r.double()
  break
  }
  case 19: {
  m.vulnerableTemplate=r.string()
  break
  }
  case 20: {
  m.v20=r.string()
  break
  }
  case 21: {
  m.v21=r.double()
  break
  }
  case 22: {
  m.v22=r.bool()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("boolean"))
  throw util.ProtocolError("missing required 'boolean'",{instance:m})
  if(!m.hasOwnProperty("number"))
  throw util.ProtocolError("missing required 'number'",{instance:m})
  if(!m.hasOwnProperty("string"))
  throw util.ProtocolError("missing required 'string'",{instance:m})
  if(!m.hasOwnProperty("text"))
  throw util.ProtocolError("missing required 'text'",{instance:m})
  if(!m.hasOwnProperty("template"))
  throw util.ProtocolError("missing required 'template'",{instance:m})
  if(!m.hasOwnProperty("vulnerableRange"))
  throw util.ProtocolError("missing required 'vulnerableRange'",{instance:m})
  if(!m.hasOwnProperty("vulnerableTemplate"))
  throw util.ProtocolError("missing required 'vulnerableTemplate'",{instance:m})
  return m
}