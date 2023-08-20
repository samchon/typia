//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function DynamicConstant$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=types[0].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("value"))
  throw util.ProtocolError("missing required 'value'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function DynamicConstant$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.value,w.uint32(10).fork()).ldelim()
  return w
}