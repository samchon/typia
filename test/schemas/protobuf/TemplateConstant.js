//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message TemplateConstant {
//     repeated TemplateConstant.Type value = 1;
//     message Type {
//         required string prefix = 1;
//         required string postfix = 2;
//         required string combined = 3;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TemplateConstant$encode(m,w){
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
  w.uint32(10).string(m.prefix)
  w.uint32(18).string(m.postfix)
  w.uint32(26).string(m.combined)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TemplateConstant$decode(r,l){
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
  m.prefix=r.string()
  break
  }
  case 2: {
  m.postfix=r.string()
  break
  }
  case 3: {
  m.combined=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("prefix"))
  throw util.ProtocolError("missing required 'prefix'",{instance:m})
  if(!m.hasOwnProperty("postfix"))
  throw util.ProtocolError("missing required 'postfix'",{instance:m})
  if(!m.hasOwnProperty("combined"))
  throw util.ProtocolError("missing required 'combined'",{instance:m})
  return m
}