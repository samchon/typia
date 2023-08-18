//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ArrayRecursiveUnionExplicitPointer {
//     repeated ArrayRecursiveUnionExplicitPointer.IBucket value = 1;
//     message IBucket {
//         oneof value {
//             ArrayRecursiveUnionExplicitPointer.IDirectory v1 = 1;
//             ArrayRecursiveUnionExplicitPointer.IImageFile v2 = 2;
//             ArrayRecursiveUnionExplicitPointer.ITextFile v3 = 3;
//             ArrayRecursiveUnionExplicitPointer.IZipFile v4 = 4;
//             ArrayRecursiveUnionExplicitPointer.IShortcut v5 = 5;
//         }
//     }
// 
//     message IDirectory {
//         required double id = 1;
//         required string name = 2;
//         required string path = 3;
//         repeated ArrayRecursiveUnionExplicitPointer.IBucket children = 4;
//         required string type = 5;
//     }
// 
//     message IImageFile {
//         required double id = 1;
//         required string name = 2;
//         required string path = 3;
//         required double width = 4;
//         required double height = 5;
//         required string url = 6;
//         required double size = 7;
//         required string type = 8;
//         required string extension = 9;
//     }
// 
//     message ITextFile {
//         required double id = 1;
//         required string name = 2;
//         required string path = 3;
//         required double size = 4;
//         required string content = 5;
//         required string type = 6;
//         required string extension = 7;
//     }
// 
//     message IZipFile {
//         required double id = 1;
//         required string name = 2;
//         required string path = 3;
//         required double size = 4;
//         required double count = 5;
//         required string type = 6;
//         required string extension = 7;
//     }
// 
//     message IShortcut {
//         required double id = 1;
//         required string name = 2;
//         required string path = 3;
//         required ArrayRecursiveUnionExplicitPointer.IBucket target = 4;
//         required string type = 5;
//         required string extension = 6;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function IBucket$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.v1!=null&&Object.hasOwnProperty.call(m,"v1"))
  types[0].encode(m.v1,w.uint32(10).fork()).ldelim()
  if(m.v2!=null&&Object.hasOwnProperty.call(m,"v2"))
  types[1].encode(m.v2,w.uint32(18).fork()).ldelim()
  if(m.v3!=null&&Object.hasOwnProperty.call(m,"v3"))
  types[2].encode(m.v3,w.uint32(26).fork()).ldelim()
  if(m.v4!=null&&Object.hasOwnProperty.call(m,"v4"))
  types[3].encode(m.v4,w.uint32(34).fork()).ldelim()
  if(m.v5!=null&&Object.hasOwnProperty.call(m,"v5"))
  types[4].encode(m.v5,w.uint32(42).fork()).ldelim()
  return w
}
function IDirectory$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.name)
  w.uint32(26).string(m.path)
  if(m.children!=null&&m.children.length){
  for(var i=0;i<m.children.length;++i)
  types[3].encode(m.children[i],w.uint32(34).fork()).ldelim()
  }
  w.uint32(42).string(m.type)
  return w
}
function IImageFile$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.name)
  w.uint32(26).string(m.path)
  w.uint32(33).double(m.width)
  w.uint32(41).double(m.height)
  w.uint32(50).string(m.url)
  w.uint32(57).double(m.size)
  w.uint32(66).string(m.type)
  w.uint32(74).string(m.extension)
  return w
}
function ITextFile$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.name)
  w.uint32(26).string(m.path)
  w.uint32(33).double(m.size)
  w.uint32(42).string(m.content)
  w.uint32(50).string(m.type)
  w.uint32(58).string(m.extension)
  return w
}
function IZipFile$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.name)
  w.uint32(26).string(m.path)
  w.uint32(33).double(m.size)
  w.uint32(41).double(m.count)
  w.uint32(50).string(m.type)
  w.uint32(58).string(m.extension)
  return w
}
function IShortcut$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.name)
  w.uint32(26).string(m.path)
  types[3].encode(m.target,w.uint32(34).fork()).ldelim()
  w.uint32(42).string(m.type)
  w.uint32(50).string(m.extension)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function IBucket$decode(r,l){
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
  case 3: {
  m.v3=types[2].decode(r,r.uint32())
  break
  }
  case 4: {
  m.v4=types[3].decode(r,r.uint32())
  break
  }
  case 5: {
  m.v5=types[4].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function IDirectory$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.path=r.string()
  break
  }
  case 4: {
  if(!(m.children&&m.children.length))
  m.children=[]
  m.children.push(types[3].decode(r,r.uint32()))
  break
  }
  case 5: {
  m.type=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("path"))
  throw util.ProtocolError("missing required 'path'",{instance:m})
  if(!m.hasOwnProperty("type"))
  throw util.ProtocolError("missing required 'type'",{instance:m})
  return m
}
function IImageFile$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.path=r.string()
  break
  }
  case 4: {
  m.width=r.double()
  break
  }
  case 5: {
  m.height=r.double()
  break
  }
  case 6: {
  m.url=r.string()
  break
  }
  case 7: {
  m.size=r.double()
  break
  }
  case 8: {
  m.type=r.string()
  break
  }
  case 9: {
  m.extension=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("path"))
  throw util.ProtocolError("missing required 'path'",{instance:m})
  if(!m.hasOwnProperty("width"))
  throw util.ProtocolError("missing required 'width'",{instance:m})
  if(!m.hasOwnProperty("height"))
  throw util.ProtocolError("missing required 'height'",{instance:m})
  if(!m.hasOwnProperty("url"))
  throw util.ProtocolError("missing required 'url'",{instance:m})
  if(!m.hasOwnProperty("size"))
  throw util.ProtocolError("missing required 'size'",{instance:m})
  if(!m.hasOwnProperty("type"))
  throw util.ProtocolError("missing required 'type'",{instance:m})
  if(!m.hasOwnProperty("extension"))
  throw util.ProtocolError("missing required 'extension'",{instance:m})
  return m
}
function ITextFile$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.path=r.string()
  break
  }
  case 4: {
  m.size=r.double()
  break
  }
  case 5: {
  m.content=r.string()
  break
  }
  case 6: {
  m.type=r.string()
  break
  }
  case 7: {
  m.extension=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("path"))
  throw util.ProtocolError("missing required 'path'",{instance:m})
  if(!m.hasOwnProperty("size"))
  throw util.ProtocolError("missing required 'size'",{instance:m})
  if(!m.hasOwnProperty("content"))
  throw util.ProtocolError("missing required 'content'",{instance:m})
  if(!m.hasOwnProperty("type"))
  throw util.ProtocolError("missing required 'type'",{instance:m})
  if(!m.hasOwnProperty("extension"))
  throw util.ProtocolError("missing required 'extension'",{instance:m})
  return m
}
function IZipFile$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.path=r.string()
  break
  }
  case 4: {
  m.size=r.double()
  break
  }
  case 5: {
  m.count=r.double()
  break
  }
  case 6: {
  m.type=r.string()
  break
  }
  case 7: {
  m.extension=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("path"))
  throw util.ProtocolError("missing required 'path'",{instance:m})
  if(!m.hasOwnProperty("size"))
  throw util.ProtocolError("missing required 'size'",{instance:m})
  if(!m.hasOwnProperty("count"))
  throw util.ProtocolError("missing required 'count'",{instance:m})
  if(!m.hasOwnProperty("type"))
  throw util.ProtocolError("missing required 'type'",{instance:m})
  if(!m.hasOwnProperty("extension"))
  throw util.ProtocolError("missing required 'extension'",{instance:m})
  return m
}
function IShortcut$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.path=r.string()
  break
  }
  case 4: {
  m.target=types[3].decode(r,r.uint32())
  break
  }
  case 5: {
  m.type=r.string()
  break
  }
  case 6: {
  m.extension=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("path"))
  throw util.ProtocolError("missing required 'path'",{instance:m})
  if(!m.hasOwnProperty("target"))
  throw util.ProtocolError("missing required 'target'",{instance:m})
  if(!m.hasOwnProperty("type"))
  throw util.ProtocolError("missing required 'type'",{instance:m})
  if(!m.hasOwnProperty("extension"))
  throw util.ProtocolError("missing required 'extension'",{instance:m})
  return m
}