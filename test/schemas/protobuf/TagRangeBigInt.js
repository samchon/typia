//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagRangeBigInt$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.value&&m.value.length))
  m.value=[]
  m.value.push(types[0].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function Type$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.greater=r.int64()
  break
  }
  case 2: {
  m.greaterEqual=r.int64()
  break
  }
  case 3: {
  m.less=r.int64()
  break
  }
  case 4: {
  m.lessEqual=r.int64()
  break
  }
  case 5: {
  m.greaterLess=r.int64()
  break
  }
  case 6: {
  m.greaterEqualLess=r.int64()
  break
  }
  case 7: {
  m.greaterLessEqual=r.int64()
  break
  }
  case 8: {
  m.greaterEqualLessEqual=r.int64()
  break
  }
  case 9: {
  m.equal=r.int64()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("greater"))
  throw util.ProtocolError("missing required 'greater'",{instance:m})
  if(!m.hasOwnProperty("greaterEqual"))
  throw util.ProtocolError("missing required 'greaterEqual'",{instance:m})
  if(!m.hasOwnProperty("less"))
  throw util.ProtocolError("missing required 'less'",{instance:m})
  if(!m.hasOwnProperty("lessEqual"))
  throw util.ProtocolError("missing required 'lessEqual'",{instance:m})
  if(!m.hasOwnProperty("greaterLess"))
  throw util.ProtocolError("missing required 'greaterLess'",{instance:m})
  if(!m.hasOwnProperty("greaterEqualLess"))
  throw util.ProtocolError("missing required 'greaterEqualLess'",{instance:m})
  if(!m.hasOwnProperty("greaterLessEqual"))
  throw util.ProtocolError("missing required 'greaterLessEqual'",{instance:m})
  if(!m.hasOwnProperty("greaterEqualLessEqual"))
  throw util.ProtocolError("missing required 'greaterEqualLessEqual'",{instance:m})
  if(!m.hasOwnProperty("equal"))
  throw util.ProtocolError("missing required 'equal'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagRangeBigInt$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function Type$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(8).int64(m.greater)
  w.uint32(16).int64(m.greaterEqual)
  w.uint32(24).int64(m.less)
  w.uint32(32).int64(m.lessEqual)
  w.uint32(40).int64(m.greaterLess)
  w.uint32(48).int64(m.greaterEqualLess)
  w.uint32(56).int64(m.greaterLessEqual)
  w.uint32(64).int64(m.greaterEqualLessEqual)
  w.uint32(72).int64(m.equal)
  return w
}