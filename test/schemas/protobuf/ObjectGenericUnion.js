//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectGenericUnion {
//     oneof value {
//         ObjectGenericUnion.ISaleReview v1 = 1;
//         ObjectGenericUnion.ISaleQuestion v2 = 2;
//     }
//     message ISaleQuestion {
//         required string writer = 1;
//         optional ObjectGenericUnion.ISaleAnswer answer = 2;
//         required string id = 3;
//         required double hit = 4;
//         repeated ObjectGenericUnion.ISaleArticle.IContent contents = 5;
//         required string created_at = 6;
//     }
// 
//     message ISaleAnswer {
//         required string id = 1;
//         required double hit = 2;
//         repeated ObjectGenericUnion.ISaleArticle.IContent contents = 3;
//         required string created_at = 4;
//     }
// 
//     message ISaleArticle {
//         message IContent {
//             required string id = 1;
//             required string created_at = 2;
//             required string title = 3;
//             required string body = 4;
//             repeated Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_ files = 5;
//         }
//     }
// 
//     message ISaleReview {
//         required string writer = 1;
//         optional ObjectGenericUnion.ISaleAnswer answer = 2;
//         required string id = 3;
//         required double hit = 4;
//         repeated ObjectGenericUnion.ISaleReview.IContent contents = 5;
//         required string created_at = 6;
//         message IContent {
//             required double score = 1;
//             required string id = 2;
//             required string created_at = 3;
//             required string title = 4;
//             required string body = 5;
//             repeated Omit_lt_ObjectGenericUnion.IAttachmentFile_comma__space__doublequote_id_doublequote__gt_ files = 6;
//         }
//     }
// }
// 
// message Omit_lt_ObjectGenericUnion {
//     message IAttachmentFile_comma__space__doublequote_id_doublequote__gt_ {
//         required string url = 1;
//         required string name = 2;
//         optional string extension = 3;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectGenericUnion$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.v1!=null&&Object.hasOwnProperty.call(m,"v1"))
  types[0].encode(m.v1,w.uint32(10).fork()).ldelim()
  if(m.v2!=null&&Object.hasOwnProperty.call(m,"v2"))
  types[1].encode(m.v2,w.uint32(18).fork()).ldelim()
  return w
}
function ISaleQuestion$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.writer)
  if(m.answer!=null&&Object.hasOwnProperty.call(m,"answer"))
  types[1].encode(m.answer,w.uint32(18).fork()).ldelim()
  w.uint32(26).string(m.id)
  w.uint32(33).double(m.hit)
  if(m.contents!=null&&m.contents.length){
  for(var i=0;i<m.contents.length;++i)
  types[4].encode(m.contents[i],w.uint32(42).fork()).ldelim()
  }
  w.uint32(50).string(m.createdAt)
  return w
}
function ISaleAnswer$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(17).double(m.hit)
  if(m.contents!=null&&m.contents.length){
  for(var i=0;i<m.contents.length;++i)
  types[2].encode(m.contents[i],w.uint32(26).fork()).ldelim()
  }
  w.uint32(34).string(m.createdAt)
  return w
}
function ISaleArticle$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function ISaleReview$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.writer)
  if(m.answer!=null&&Object.hasOwnProperty.call(m,"answer"))
  types[1].encode(m.answer,w.uint32(18).fork()).ldelim()
  w.uint32(26).string(m.id)
  w.uint32(33).double(m.hit)
  if(m.contents!=null&&m.contents.length){
  for(var i=0;i<m.contents.length;++i)
  types[4].encode(m.contents[i],w.uint32(42).fork()).ldelim()
  }
  w.uint32(50).string(m.createdAt)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectGenericUnion$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.v1=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.v2=types[1].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function ISaleQuestion$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.writer=r.string()
  break
  }
  case 2: {
  m.answer=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.id=r.string()
  break
  }
  case 4: {
  m.hit=r.double()
  break
  }
  case 5: {
  if(!(m.contents&&m.contents.length))
  m.contents=[]
  m.contents.push(types[4].decode(r,r.uint32()))
  break
  }
  case 6: {
  m.createdAt=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("writer"))
  throw util.ProtocolError("missing required 'writer'",{instance:m})
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("hit"))
  throw util.ProtocolError("missing required 'hit'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function ISaleAnswer$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.hit=r.double()
  break
  }
  case 3: {
  if(!(m.contents&&m.contents.length))
  m.contents=[]
  m.contents.push(types[2].decode(r,r.uint32()))
  break
  }
  case 4: {
  m.createdAt=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("hit"))
  throw util.ProtocolError("missing required 'hit'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function ISaleArticle$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function ISaleReview$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.writer=r.string()
  break
  }
  case 2: {
  m.answer=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.id=r.string()
  break
  }
  case 4: {
  m.hit=r.double()
  break
  }
  case 5: {
  if(!(m.contents&&m.contents.length))
  m.contents=[]
  m.contents.push(types[4].decode(r,r.uint32()))
  break
  }
  case 6: {
  m.createdAt=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("writer"))
  throw util.ProtocolError("missing required 'writer'",{instance:m})
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("hit"))
  throw util.ProtocolError("missing required 'hit'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}