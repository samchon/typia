//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message TagRange {
//     repeated TagRange.Type value = 1;
//     message Type {
//         required double greater = 1;
//         required double greater_equal = 2;
//         required double less = 3;
//         required double less_equal = 4;
//         required double greater_less = 5;
//         required double greater_equal_less = 6;
//         required double greater_less_equal = 7;
//         required double greater_equal_less_equal = 8;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TagRange$encode(m,w){
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
  w.uint32(9).double(m.greater)
  w.uint32(17).double(m.greaterEqual)
  w.uint32(25).double(m.less)
  w.uint32(33).double(m.lessEqual)
  w.uint32(41).double(m.greaterLess)
  w.uint32(49).double(m.greaterEqualLess)
  w.uint32(57).double(m.greaterLessEqual)
  w.uint32(65).double(m.greaterEqualLessEqual)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TagRange$decode(r,l){
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
  m.greater=r.double()
  break
  }
  case 2: {
  m.greaterEqual=r.double()
  break
  }
  case 3: {
  m.less=r.double()
  break
  }
  case 4: {
  m.lessEqual=r.double()
  break
  }
  case 5: {
  m.greaterLess=r.double()
  break
  }
  case 6: {
  m.greaterEqualLess=r.double()
  break
  }
  case 7: {
  m.greaterLessEqual=r.double()
  break
  }
  case 8: {
  m.greaterEqualLessEqual=r.double()
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
  return m
}