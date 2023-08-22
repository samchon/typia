//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagTypeBigInt$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.in64=r.int64()
  break
  }
  case 2: {
  m.uint64=r.uint64()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("in64"))
  throw util.ProtocolError("missing required 'in64'",{instance:m})
  if(!m.hasOwnProperty("uint64"))
  throw util.ProtocolError("missing required 'uint64'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagTypeBigInt$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(8).int64(m.in64)
  w.uint32(16).uint64(m.uint64)
  return w
}