typebot = function(e, s, d, t,b,p) {
  var _this = this;
  this.eI = 0;
  this.speed = s;
  this.delay = d;
  this.eLength = t.length;
  this.z = 0;
  this.lpc = 0;
  this.p = [];
  this.c_t = [];
  this.c_b = [];
  this.t = t;
  this.d = d;
  this.s = s;
  this.onLayerStartCalled = false;
  if(p != undefined){
    this.paused = p;
  }else{
    this.paused = false;
  }
  this.done = function(f){_this.doneF = f;return _this}
  this.onLayerEnd = function(f){_this.onLayerEndF = f;return _this}
  this.whileTyping = function(f){_this.whileTypingF = f;return _this}
  this.onLayerStart = function(f){_this.onLayerStartF = f;return _this}
  _this.d = _this.t[_this.lpc]["start"] || d;
  function loop() {
    if(typeof _this.t[_this.lpc] == "object"){
      _this.isCustom = true;
    }
    if(_this.t[_this.lpc]["start"] != undefined){
      _this.s = ((_this.t[_this.lpc]["end"] - _this.t[_this.lpc]["start"])/_this.t[_this.lpc]["text"].split(" ").join("").length) || s;
      _this.d = _this.t[_this.lpc+1] == undefined ? d : _this.t[_this.lpc+1]["start"] - _this.t[_this.lpc]["end"];
    }

    _this.p.push(document.createElement("div"));
    _this.p[_this.lpc].className = "typebot-layer";
    if(!_this.isCustom && _this.t[_this.lpc]["element"] == undefined){
      _this.c_t.push(document.createElement("span"));
      _this.c_t[_this.lpc].className = "typebot-element";
    }else{
      _this.c_t.push(document.createElement(_this.t[_this.lpc]["element"]));
      _this.c_t[_this.lpc].className =_this.t[_this.lpc]["class"] || "typebot-custom";
    }
    if(_this.isCustom && _this.t[_this.lpc]["whileTyping"] != undefined){
      _this.cwhileTyping = _this.t[_this.lpc]["whileTyping"];
    }
    if(_this.isCustom && _this.t[_this.lpc]["done"] != undefined){
      _this.cdone = _this.t[_this.lpc]["done"];
    }
    _this.c_b.push(document.createElement("span"));
    _this.c_b[_this.lpc].className = "typebot-blinker";
    if(b != undefined && b != false){
      _this.c_b[_this.lpc].innerHTML = "|";
    }
    _this.p[_this.lpc].appendChild(_this.c_t[_this.lpc]);
    _this.p[_this.lpc].appendChild(_this.c_b[_this.lpc]);
    _this.Es = document.querySelectorAll(e);
    for(_this.lx =0;_this.lx<_this.Es.length;_this.lx++){
      _this.Es[_this.lx].appendChild(_this.p[_this.lpc]);
    }
    _this.elements = _this.p;
    _this.blinker = _this.c_b[_this.lpc];
    _this.activeElement = _this.p[_this.lpc];  
    _this.activeChild = _this.c_t[_this.lpc];
    _this.infn = function() {
      if(!_this.onLayerStartCalled){
        if("onLayerStartF" in _this){
          _this.onLayerStartF();
        }
        _this.onLayerStartCalled = true;
      }
      if(!_this.paused){
        if(_this.isCustom && _this.t[_this.lpc]["text"] != undefined){
          if(_this.t[_this.eI]["text"][_this.z] == " "){
            _this.z = _this.z+1 >= _this.t[_this.eI]["text"].length ? _this.z : _this.z+1;
            _this.c_t[_this.lpc].innerHTML += "<span class='typebot-letter'> "+_this.t[_this.eI]["text"][_this.z]+"</span>";
          }else{
            _this.c_t[_this.lpc].innerHTML += "<span class='typebot-letter'>"+_this.t[_this.eI]["text"][_this.z]+"</span>";
          }
        }else{
          if(_this.t[_this.eI][_this.z] == " "){
            _this.z = _this.z+1 >= _this.t[_this.eI].length ? _this.z : _this.z+1;
            _this.c_t[_this.lpc].innerHTML += "<span class='typebot-letter'> "+_this.t[_this.eI][_this.z]+"</span>";  
          }else{
            _this.c_t[_this.lpc].innerHTML += "<span class='typebot-letter'>"+_this.t[_this.eI][_this.z]+"</span>";
          }
        } 
        _this.cl_len = _this.c_t[_this.lpc].childNodes.length; 
        _this.letter = _this.c_t[_this.lpc].childNodes[_this.cl_len-1];  
        var text = (_this.isCustom && _this.t[_this.lpc]["text"] != undefined) ? _this.t[_this.eI]["text"] : _this.t[_this.eI];     
        if (_this.z >= text.length-1) {
          if(_this.z == text.length-1){
            if("onLayerEndF" in _this){
              _this.onLayerEndF();
            }
            if("cdone" in _this){
              _this.cdone();
              _this.cdone = function(){return;}
            }
          }
          _this.eI = _this.eI + 1;
          if (_this.eI + 1 <= t.length) {
            _this.z = 0;
            _this.lpc+=1;
            setTimeout(loop,_this.d);
            _this.onLayerStartCalled = false;
          }else{
            if("doneF" in _this){
              _this.doneF();
            }
          }
          clearInterval(_this.interval);
        } else {
          _this.z = _this.z + 1;
        }
        if("cwhileTyping" in _this){
          _this.cwhileTyping();
        }
        if("whileTypingF" in _this){
          _this.whileTypingF();
        }
      }
    }
    _this.interval = setInterval(_this.infn, _this.s);
  }
  this.init = function(){setTimeout(function(){loop();},_this.d);return _this;}
  this.pause = function(){_this.paused = true;return _this;}
  this.start = function(){_this.paused = false;return _this;}
  this.destroy = function(){clearInterval(_this.interval);return _this;}
}
